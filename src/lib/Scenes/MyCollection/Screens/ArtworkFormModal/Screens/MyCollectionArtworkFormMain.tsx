import { StackScreenProps } from "@react-navigation/stack"
import { FancyModalHeader } from "lib/Components/FancyModal/FancyModalHeader"
import { AppStore } from "lib/store/AppStore"
import { isEmpty } from "lodash"
import { BorderBox, Box, Button, Flex, Join, Sans, Spacer } from "palette"
import React from "react"
import { ActionSheetIOS, ScrollView } from "react-native"
import { ScreenMargin } from "../../../Components/ScreenMargin"
import { ArrowButton } from "../Components/ArrowButton"
import { ArtistAutosuggest } from "../Components/ArtistAutosuggest"
import { Dimensions } from "../Components/Dimensions"
import { MediumPicker } from "../Components/MediumPicker"
import { useArtworkForm } from "../Form/useArtworkForm"
import { ArtworkFormModalScreen } from "../MyCollectionArtworkFormModal"

const SHOW_FORM_VALIDATION_ERRORS_IN_DEV = false

export const MyCollectionArtworkFormMain: React.FC<StackScreenProps<ArtworkFormModalScreen, "ArtworkForm">> = ({
  navigation,
  route,
}) => {
  const artworkActions = AppStore.actions.myCollection.artwork
  const artworkState = AppStore.useAppState((state) => state.myCollection.artwork)
  const { formik } = useArtworkForm()
  const modalType = route.params.mode
  const addOrEditLabel = modalType === "edit" ? "Edit" : "Add"

  return (
    <>
      <FancyModalHeader leftButtonText="Cancel" onLeftButtonPress={() => route.params.onDismiss()}>
        {addOrEditLabel} artwork
      </FancyModalHeader>
      <ScrollView
        /* Disable touch events in form while loading */
        keyboardDismissMode={"on-drag"}
        keyboardShouldPersistTaps={"handled"}
      >
        <Spacer my={1} />

        <Sans size="4" textAlign="center">
          {addOrEditLabel} details about your work for a price {"\n"}
          evaluation and market insights.
        </Sans>

        <ScreenMargin>
          <Join separator={<Spacer my={1} />}>
            <ArtistAutosuggest />
            <MediumPicker />
            <Dimensions />
          </Join>
        </ScreenMargin>

        <Spacer my={2} />

        <PhotosButton
          data-test-id="PhotosButton"
          onPress={() => {
            if (isEmpty(artworkState.sessionState.formValues.photos)) {
              artworkActions.takeOrPickPhotos()
            } else {
              navigation.navigate("AddPhotos")
            }
          }}
        />
        <AdditionalDetailsButton
          data-test-id="AdditionalDetailsButton"
          onPress={() => {
            navigation.navigate("AdditionalDetails")
          }}
        />

        <Spacer my={2} />

        <ScreenMargin>
          <Button disabled={!formik.isValid} block onPress={formik.handleSubmit} data-test-id="CompleteButton">
            Complete
          </Button>

          {modalType === "edit" && (
            <Button
              mt={2}
              variant="secondaryGray"
              block
              onPress={() => {
                ActionSheetIOS.showActionSheetWithOptions(
                  {
                    title: "Delete artwork?",
                    options: ["Delete", "Cancel"],
                    destructiveButtonIndex: 0,
                    cancelButtonIndex: 1,
                  },
                  (buttonIndex) => {
                    if (buttonIndex === 0) {
                      route.params.onDelete?.()
                    }
                  }
                )
              }}
              data-test-id="DeleteButton"
            >
              Delete
            </Button>
          )}
          <Spacer mt={4} />
        </ScreenMargin>

        {/* Show validation errors during development */}
        {!!(SHOW_FORM_VALIDATION_ERRORS_IN_DEV && __DEV__ && formik.errors) && (
          <ScreenMargin>
            <Box my={2}>
              <Sans size="3">Errors: {JSON.stringify(formik.errors)}</Sans>
            </Box>
          </ScreenMargin>
        )}
      </ScrollView>
    </>
  )
}

const PhotosButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  const artworkState = AppStore.useAppState((state) => state.myCollection.artwork)
  const photos = artworkState.sessionState.formValues.photos

  return (
    <BorderBox px={0} top={-1}>
      <ScreenMargin>
        <ArrowButton onPress={onPress}>
          <Flex flexDirection="row">
            <Sans size="3" weight="medium">
              Photos
            </Sans>
          </Flex>
          {photos.length > 0 && (
            <>
              {photos.length === 1 ? (
                <Sans size="3" data-test-id="onePhoto">
                  1 photo added
                </Sans>
              ) : (
                <Sans size="3" data-test-id="multiplePhotos">
                  {photos.length} photos added
                </Sans>
              )}
            </>
          )}
        </ArrowButton>
      </ScreenMargin>
    </BorderBox>
  )
}

const AdditionalDetailsButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <BorderBox px={0} position="relative" top={-2}>
      <ScreenMargin>
        <ArrowButton onPress={onPress}>
          <Flex flexDirection="row">
            <Sans size="3" weight="medium">
              Additional details
            </Sans>
            <Sans size="3" ml="2px">
              (optional)
            </Sans>
          </Flex>
        </ArrowButton>
      </ScreenMargin>
    </BorderBox>
  )
}