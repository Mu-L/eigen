import { Button, Sans, Serif, Theme } from "palette"
import React from "react"

import { Schema, screenTrack, track } from "../../../utils/track"

import NavigatorIOS from "lib/utils/__legacy_do_not_use__navigator-ios-shim"
import {
  Dimensions,
  EmitterSubscription,
  Keyboard,
  KeyboardAvoidingView,
  LayoutRectangle,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native"

import { Flex } from "../Elements/Flex"

import { validatePresence } from "../Validators"

import { BiddingThemeProvider } from "../Components/BiddingThemeProvider"
import { Container } from "../Components/Containers"
import { Input, InputProps } from "../Components/Input"
import { Address, Country } from "../types"

import { FancyModalHeader } from "lib/Components/FancyModal/FancyModalHeader"
import { SelectCountry } from "./SelectCountry"

interface StyledInputInterface {
  /** The object which styled components wraps */
  focus?: () => void
  blur?: () => void
}

interface StyledInputProps extends InputProps {
  label: string
  errorMessage?: string
}
const StyledInput: React.FC<StyledInputProps> = ({ label, errorMessage, onLayout, ...props }) => (
  <Flex mb={4} onLayout={onLayout}>
    <Serif size="3" mb={2}>
      {label}
    </Serif>
    <Input mb={3} error={Boolean(errorMessage)} {...props} />
    <Flex height={15}>
      {!!errorMessage && (
        <Sans size="2" color="red100">
          {errorMessage}
        </Sans>
      )}
    </Flex>
  </Flex>
)

const iOSAccessoryViewHeight = 60

interface BillingAddressProps {
  onSubmit?: (values: Address) => void
  navigator?: NavigatorIOS
  billingAddress?: Address
}

interface BillingAddressState {
  values: Address
  errors: {
    fullName?: string
    addressLine1?: string
    addressLine2?: string
    city?: string
    state?: string
    country?: string
    postalCode?: string
  }
}

@screenTrack({
  context_screen: Schema.PageNames.BidFlowBillingAddressPage,
  context_screen_owner_type: null,
})
export class BillingAddress extends React.Component<BillingAddressProps, BillingAddressState> {
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private addressLine1: StyledInputInterface
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private addressLine2: StyledInputInterface
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private city: StyledInputInterface
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private stateProvinceRegion: StyledInputInterface
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private postalCode: StyledInputInterface
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private phoneNumber: StyledInputInterface

  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private fullNameLayout: LayoutRectangle
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private addressLine1Layout: LayoutRectangle
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private addressLine2Layout: LayoutRectangle
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private cityLayout: LayoutRectangle
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private stateProvinceRegionLayout: LayoutRectangle
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private postalCodeLayout: LayoutRectangle
  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private phoneNumberLayout: LayoutRectangle

  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private keyboardDidShowListener: EmitterSubscription

  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private keyboardHeight: number

  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  private scrollView: ScrollView

  // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
  constructor(props) {
    super(props)

    this.state = {
      // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
      values: { ...this.props.billingAddress },
      errors: {},
    }
  }

  validateAddress(address: Address) {
    const { fullName, addressLine1, city, state, country, postalCode, phoneNumber } = address

    return {
      fullName: validatePresence(fullName),
      addressLine1: validatePresence(addressLine1),
      city: validatePresence(city),
      state: validatePresence(state),
      country: validatePresence(country && country.shortName),
      postalCode: validatePresence(postalCode),
      phoneNumber: validatePresence(phoneNumber),
    }
  }

  validateField(field: string) {
    this.setState({
      // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
      errors: { ...this.state.errors, [field]: this.validateAddress(this.state.values)[field] },
    })
  }

  onSubmit() {
    const errors = this.validateAddress(this.state.values)

    // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
    if (Object.keys(errors).filter((key) => errors[key]).length > 0) {
      this.setState({ errors })
    } else {
      this.submitValidAddress()
    }
  }

  onCountrySelected(country: Country) {
    const values = { ...this.state.values, country }

    this.setState({
      values,
      errors: {
        ...this.state.errors,
        country: this.validateAddress(values).country,
      },
    })
  }

  @track({
    action_type: Schema.ActionTypes.Success,
    action_name: Schema.ActionNames.BidFlowSaveBillingAddress,
  })
  submitValidAddress() {
    // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
    this.props.onSubmit(this.state.values)
    // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
    this.props.navigator.pop()
  }

  presentSelectCountry() {
    this.props.navigator?.push({
      component: SelectCountry,
      title: "",
      passProps: {
        country: this.state.values.country,
        onCountrySelected: this.onCountrySelected.bind(this),
      },
    })
  }

  UNSAFE_componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      ({ endCoordinates }) => (this.keyboardHeight = endCoordinates.height)
    )
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
  }

  scrollToPosition(layout: LayoutRectangle) {
    // The scroll is handled by default on android since we are using adjustPan as a windowSoftInputMode
    if (Platform.OS === "ios") {
      this.scrollView.scrollTo({ x: 0, y: this.yPosition(layout) })
    }
  }

  render() {
    const errorForCountry = this.state.errors.country

    return (
      <BiddingThemeProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={this.verticalOffset}
          style={{ flex: 1 }}
        >
          <Theme>
            <FancyModalHeader onLeftButtonPress={() => this.props.navigator?.pop()}>
              Add billing address
            </FancyModalHeader>
          </Theme>
          <ScrollView ref={(scrollView) => (this.scrollView = scrollView as any)}>
            <Container>
              <StyledInput
                {...this.defaultPropsForInput("fullName")}
                label="Full name"
                placeholder="Add your full name"
                autoFocus={true}
                textContentType="name"
                // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
                onSubmitEditing={() => this.addressLine1.focus()}
                onLayout={({ nativeEvent }) => (this.fullNameLayout = nativeEvent.layout)}
                onFocus={() => this.scrollToPosition(this.fullNameLayout)}
              />

              <StyledInput
                {...this.defaultPropsForInput("addressLine1")}
                label="Address line 1"
                placeholder="Add your street address"
                textContentType="streetAddressLine1"
                // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
                onSubmitEditing={() => this.addressLine2.focus()}
                onLayout={({ nativeEvent }) => (this.addressLine1Layout = nativeEvent.layout)}
                onFocus={() => this.scrollToPosition(this.addressLine1Layout)}
              />

              <StyledInput
                {...this.defaultPropsForInput("addressLine2")}
                label="Address line 2 (optional)"
                placeholder="Add your apt, floor, suite, etc."
                textContentType="streetAddressLine2"
                // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
                onSubmitEditing={() => this.city.focus()}
                onLayout={({ nativeEvent }) => (this.addressLine2Layout = nativeEvent.layout)}
                onFocus={() => this.scrollToPosition(this.addressLine2Layout)}
              />

              <StyledInput
                {...this.defaultPropsForInput("city")}
                label="City"
                placeholder="Add your city"
                textContentType="addressCity"
                // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
                onSubmitEditing={() => this.stateProvinceRegion.focus()}
                onLayout={({ nativeEvent }) => (this.cityLayout = nativeEvent.layout)}
                onFocus={() => this.scrollToPosition(this.cityLayout)}
              />

              <StyledInput
                {...this.defaultPropsForInput("state")}
                label="State, Province, or Region"
                placeholder="Add state, province, or region"
                textContentType="addressState"
                // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
                onSubmitEditing={() => this.postalCode.focus()}
                inputRef={(el) => (this.stateProvinceRegion = el)}
                onLayout={({ nativeEvent }) => (this.stateProvinceRegionLayout = nativeEvent.layout)}
                onFocus={() => this.scrollToPosition(this.stateProvinceRegionLayout)}
              />

              <StyledInput
                {...this.defaultPropsForInput("postalCode")}
                label="Postal code"
                placeholder="Add your postal code"
                textContentType="postalCode"
                // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
                onSubmitEditing={() => this.phoneNumber.focus()}
                onLayout={({ nativeEvent }) => (this.postalCodeLayout = nativeEvent.layout)}
                onFocus={() => this.scrollToPosition(this.postalCodeLayout)}
              />

              <StyledInput
                {...this.defaultPropsForInput("phoneNumber")}
                label="Phone"
                placeholder="Add your phone number"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                onSubmitEditing={() => this.presentSelectCountry()}
                onLayout={({ nativeEvent }) => (this.phoneNumberLayout = nativeEvent.layout)}
                onFocus={() => this.scrollToPosition(this.phoneNumberLayout)}
              />

              <Flex mb={4}>
                <Serif size="3" mb={2}>
                  Country
                </Serif>

                <TouchableWithoutFeedback
                  testID="select-country-press-handler"
                  onPress={() => this.presentSelectCountry()}
                >
                  <Flex mb={3} p={3} pb={2} border={1} borderColor={errorForCountry ? "red100" : "black10"}>
                    {this.state.values.country ? (
                      <Serif size="3">{this.state.values.country.longName}</Serif>
                    ) : (
                      <Serif size="3" color="black30">
                        Select your country
                      </Serif>
                    )}
                  </Flex>
                </TouchableWithoutFeedback>

                {!!errorForCountry && (
                  <Sans size="2" color="red100">
                    {errorForCountry}
                  </Sans>
                )}
              </Flex>

              <Button block width={100} onPress={() => this.onSubmit()}>
                Add billing address
              </Button>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>
      </BiddingThemeProvider>
    )
  }

  private defaultPropsForInput(field: string): Partial<StyledInputProps> {
    return {
      autoCapitalize: "words",
      // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
      errorMessage: this.state.errors[field],
      // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
      inputRef: (el) => (this[field] = el),
      onBlur: () => this.validateField(field),
      onChangeText: (value) => this.setState({ values: { ...this.state.values, [field]: value } }),
      returnKeyType: "next",
      // @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
      value: this.state.values[field],
    }
  }

  private yPosition({ y, height }: LayoutRectangle) {
    const windowHeight = Dimensions.get("window").height

    return Math.max(0, y - windowHeight + height + iOSAccessoryViewHeight + this.keyboardHeight + this.iPhoneXOffset)
  }

  private get verticalOffset() {
    return this.iPhoneXOffset + 15
  }

  // TODO: Remove this once React Native has been updated
  private get iPhoneXOffset() {
    const isPhoneX = Dimensions.get("window").height === 812 && Dimensions.get("window").width === 375

    return isPhoneX ? 15 : 0
  }
}
