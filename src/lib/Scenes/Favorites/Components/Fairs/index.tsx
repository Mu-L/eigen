import SavedFairItemRow from "lib/Components/Lists/SavedFairItemRow"
import Spinner from "lib/Components/Spinner"
import { ZeroState } from "lib/Components/States/ZeroState"
import { PAGE_SIZE } from "lib/data/constants"
import React, { Component } from "react"
import { FlatList, RefreshControl, ScrollView } from "react-native"
import { createPaginationContainer, graphql, RelayPaginationProp } from "react-relay"

import { Fairs_me } from "__generated__/Fairs_me.graphql"
import { extractNodes } from "lib/utils/extractNodes"

interface Props {
  me: Fairs_me
  relay: RelayPaginationProp
  onDataFetching?: (loading: boolean) => void
}

interface State {
  fetchingMoreData: boolean
  refreshingFromPull: boolean
}

export class SavedFairs extends Component<Props, State> {
  state = {
    fetchingMoreData: false,
    refreshingFromPull: false,
  }

  loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return
    }

    this.setState({ fetchingMoreData: true })
    this.props.relay.loadMore(PAGE_SIZE, error => {
      if (error) {
        // FIXME: Handle error
        console.error("Fairs/index.tsx", error.message)
      }
      this.setState({ fetchingMoreData: false })
    })
  }

  handleRefresh = () => {
    this.setState({ refreshingFromPull: true })
    this.props.relay.refetchConnection(PAGE_SIZE, error => {
      if (error) {
        // FIXME: Handle error
        console.error("Fairs/index.tsx #handleRefresh", error.message)
      }
      this.setState({ refreshingFromPull: false })
    })
  }

  // @TODO: Implement test on this component https://artsyproduct.atlassian.net/browse/LD-563
  render() {
    const fairs = extractNodes(this.props.me.followsAndSaves?.fairs).filter(node => node.profile?.is_followed)

    if (fairs.length === 0 || !fairs) {
      return (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={<RefreshControl refreshing={this.state.refreshingFromPull} onRefresh={this.handleRefresh} />}
        >
          <ZeroState
            title="You haven’t followed any fairs yet"
            subtitle="Follow fairs to get notified about new fairs that have been added to Artsy."
          />
        </ScrollView>
      )
    }

    return (
      <FlatList
        data={fairs}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <SavedFairItemRow relay={this.props.relay as any} node={item} />}
        onEndReached={this.loadMore}
        onEndReachedThreshold={0.2}
        refreshControl={<RefreshControl refreshing={this.state.refreshingFromPull} onRefresh={this.handleRefresh} />}
        ListFooterComponent={
          this.state.fetchingMoreData ? <Spinner style={{ marginTop: 20, marginBottom: 20 }} /> : null
        }
      />
    )
  }
}

export default createPaginationContainer(
  SavedFairs,
  {
    me: graphql`
      fragment Fairs_me on Me
        @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String", defaultValue: "" }) {
        followsAndSaves {
          fairs: fairsConnection(first: $count, after: $cursor) @connection(key: "SavedFairs_fairs") {
            edges {
              node {
                id
                profile {
                  slug
                  is_followed: isFollowed
                  id
                }
                exhibition_period: exhibitionPeriod
                name
                counts {
                  partners
                }
                href
                image {
                  url
                }
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      // @ts-ignore STRICTNESS_MIGRATION
      return props.me && props.me.followsAndSaves.fairs
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      }
    },
    getVariables(_props, { count, cursor }, fragmentVariables) {
      return {
        ...fragmentVariables,
        count,
        cursor,
      }
    },
    query: graphql`
      query FairsQuery($count: Int!, $cursor: String) {
        me {
          ...Fairs_me @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  }
)
