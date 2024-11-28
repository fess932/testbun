import useStore from "@/store/store";
import { Button, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function Counter() {
  const { count, inc } = useStore();
  return (
    <View>
      <ThemedText>{count}</ThemedText>
      <Button onPress={inc} title="one up" />
    </View>
  );
}
