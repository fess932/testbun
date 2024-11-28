import "@/assets/global.css";

import { ScrollView, SafeAreaView, View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import images from "@/constants/images";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover New Adventures for You and Your Dog – with{" "}
              <Text className="text-secondary-200">Woofly</Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Connect, explore, and make every outing unforgettable.
          </Text>

          <Link href="/(auth)/sign-in">Continue with Email</Link>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#A3B18A" style="light" />
    </SafeAreaView>
  );
}
