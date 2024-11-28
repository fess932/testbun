import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import { useState } from "react";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-ful justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Woofly
          </Text>
          <FormField
            title="Email"
            value={form.email}
            placeholder="email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={""}
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
