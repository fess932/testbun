import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

type FormProps = {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: ((text: string) => void) | undefined;
  otherStyles: string;
};

export default function FormField(props: FormProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${props.otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">
        {props.title}
      </Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={props.handleChangeText}
          secureTextEntry={props.title === "Password" && !showPassword}
        />
        {props.title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
