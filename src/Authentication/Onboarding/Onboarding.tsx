import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";
import Animated, { multiply } from "react-native-reanimated";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./Subslide";

const BORDER_RADIUS = 75;

// interface Onboarding {

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    // height: 0.61 * height,
    backgroundColor: "cyan",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find your Outfits!",
    description:
      "Confused about your outfit? Don't worry! Find your best outfit here!",
    color: "#BBEAF3",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundres of outfits ideas",
    color: "#B9F1BD",
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FCDDD3",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FCD4DB",
  },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);

  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          decelerationRate="fast"
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!(index % 2)} {...{ label: title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [
                {
                  translateX: multiply(x, -1),
                },
              ],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <SubSlide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.getNode().scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
