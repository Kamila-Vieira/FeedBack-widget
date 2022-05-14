import { Camera, Trash } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image source={{ uri: screenshot }} style={styles.image} />

          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
