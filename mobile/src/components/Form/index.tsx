import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { feedbackTypes } from "../../mocks/feedbackTypes";
import { theme } from "../../theme";
import { Button } from "../Button";
import { ScreenshotButton } from "../ScreenshotButton";
import { FeedbackType } from "../Widget";
import { styles } from "./styles";

interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder={feedbackTypeInfo.placeholder}
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot="https://github.com/Kamila-Vieira.png"
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
        />

        <Button isLoading={false} />
      </View>
    </View>
  );
}
