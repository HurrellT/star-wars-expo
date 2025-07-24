import { Button } from "@hurrellt/ui";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { ActivityIndicator, Linking, ScrollView, Text, View } from "react-native";
import { PersonCard } from "~/components/People/molecules/PersonCard";
import { peopleQueryOptions } from "~/services/people/people";

export default function Index() {
  const router = useRouter();
  const { data: people, isPending, error } = useQuery(peopleQueryOptions);

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Error loading data</Text>
      </View>
    );
  }

  if (isPending) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1">
      <View className="flex-1 p-4">
        <Button text="Join the rebellion" onClick={() => Linking.openURL('https://swapi.info/')} className="mb-4" />
        {people?.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </View>
    </ScrollView>
  );
}
