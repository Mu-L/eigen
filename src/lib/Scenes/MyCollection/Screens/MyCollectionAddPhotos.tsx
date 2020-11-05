import { StackScreenProps } from "@react-navigation/stack"
import { FancyModalHeader } from "lib/Components/FancyModal/FancyModalHeader"
import { ScreenMargin } from "lib/Scenes/MyCollection/Components/ScreenMargin"
import { AppStore } from "lib/store/AppStore"
import { useScreenDimensions } from "lib/utils/useScreenDimensions"
import { AddIcon, BorderBox, Box, color, Flex, XCircleIcon } from "palette"
import React from "react"
import { Image, ScrollView, TouchableOpacity } from "react-native"
import { Image as ImageProps } from "react-native-image-crop-picker"

export const MyCollectionAddPhotos: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const formValues = AppStore.useAppState((state) => state.myCollection.artwork.sessionState.formValues)
  const imageSize = useImageSize()
  const { photos } = formValues

  return (
    <>
      <FancyModalHeader onLeftButtonPress={() => navigation.goBack()}>
        Photos {!!photos.length && `(${photos.length})`}
      </FancyModalHeader>
      <ScrollView>
        <Flex mt={2}>
          <ScreenMargin>
            <Flex flexDirection="row" flexWrap="wrap">
              <AddPhotosButton />

              {photos.map((photo, index) => {
                return (
                  <Box key={index}>
                    <Box ml={index % 2 === 0 ? 1 : 0} mb={1}>
                      <Image
                        style={{ width: imageSize, height: imageSize, resizeMode: "cover" }}
                        source={{ uri: photo.path }}
                      />
                      <DeletePhotoButton photo={photo} />
                    </Box>
                  </Box>
                )
              })}
            </Flex>
          </ScreenMargin>
        </Flex>
      </ScrollView>
    </>
  )
}

const AddPhotosButton: React.FC = () => {
  const artworkActions = AppStore.actions.myCollection.artwork
  const imageSize = useImageSize()

  return (
    <TouchableOpacity onPress={() => artworkActions.takeOrPickPhotos()}>
      <BorderBox mb={1} p={0} bg={color("white100")} width={imageSize} height={imageSize} key="addMorePhotos">
        <Flex flex={1} flexDirection="row" justifyContent="center" alignItems="center">
          <AddIcon width={30} height={30} />
        </Flex>
      </BorderBox>
    </TouchableOpacity>
  )
}

const DeletePhotoButton: React.FC<{ photo: ImageProps }> = ({ photo }) => {
  const artworkActions = AppStore.actions.myCollection.artwork

  return (
    <Box position="absolute" right={-4} top={-5}>
      <TouchableOpacity
        hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
        onPress={() => artworkActions.removePhoto(photo)}
      >
        <XCircleIcon width={20} height={20} />
      </TouchableOpacity>
    </Box>
  )
}

const useImageSize = () => {
  const dimensions = useScreenDimensions()
  const margins = 2 * 20 + 10
  const size = Math.round((dimensions.width - margins) / 2)
  return size
}

export const tests = {
  AddPhotosButton,
  DeletePhotoButton,
}
