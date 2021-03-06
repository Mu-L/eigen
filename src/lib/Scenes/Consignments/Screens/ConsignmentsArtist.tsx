import { ConsignmentsArtistQuery } from "__generated__/ConsignmentsArtistQuery.graphql"
import { defaultEnvironment as environment } from "lib/relay/createEnvironment"
import NavigatorIOS from "lib/utils/__legacy_do_not_use__navigator-ios-shim"
import { extractNodes } from "lib/utils/extractNodes"
import { throttle } from "lodash"
import { Theme } from "palette"
import React from "react"
import { Dimensions, View, ViewProperties } from "react-native"
import { fetchQuery, graphql } from "react-relay"
import { BottomAlignedButton } from "../Components/BottomAlignedButton"
import { SearchResults } from "../Components/SearchResults"
import { ArtistResult, ConsignmentSetup } from "../index"

interface Props extends ConsignmentSetup, ViewProperties {
  navigator: NavigatorIOS
  updateWithArtist?: (result: ArtistResult) => void
}

interface State {
  query: string | null
  searching: boolean
  results: ArtistResult[] | null
}

export default class Artist extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      query: null,
      searching: false,
      results: null,
    }
  }

  doneTapped = () => {
    this.props.navigator.pop()
  }

  artistSelected = (result: ArtistResult) => {
    // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
    this.props.updateWithArtist(result)
    this.props.navigator.pop()
  }

  textChanged = (text: string) => {
    this.setState({ query: text, searching: text.length > 0 })
    this.searchForQuery(text)
  }

  // tslint:disable:member-ordering
  searchForQuery = throttle(async (query: string) => {
    const data = await fetchQuery<ConsignmentsArtistQuery>(
      environment,
      graphql`
        query ConsignmentsArtistQuery($query: String!) {
          searchConnection(query: $query, first: 10, entities: [ARTIST], mode: AUTOSUGGEST) {
            edges {
              node {
                ... on Artist {
                  internalID
                  name
                  image {
                    url
                  }
                }
              }
            }
          }
        }
      `,
      { query },
      { force: true }
    )
    const results = extractNodes(data.searchConnection) as ArtistResult[]
    this.setState({ results, searching: false })
  }, 1000)

  render() {
    const isPad = Dimensions.get("window").width > 700

    return (
      <Theme>
        <BottomAlignedButton onPress={this.doneTapped} buttonText="Done">
          <View
            style={{
              alignContent: "center",
              justifyContent: isPad ? "center" : "flex-end",
              flexGrow: 1,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            }}
          >
            <SearchResults<ArtistResult>
              results={this.state.results}
              // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
              query={this.state.query}
              placeholder="Artist/Designer Name"
              noResultsMessage="Unfortunately we are not accepting consignments for works by"
              onChangeText={this.textChanged}
              searching={this.state.searching}
              resultSelected={this.artistSelected}
            />
          </View>
        </BottomAlignedButton>
      </Theme>
    )
  }
}
