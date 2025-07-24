import { Button } from "@hurrellt/ui";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, Linking, Text, View } from "react-native";
import { useState } from "react";
import { PersonCard } from "~/components/People/molecules/PersonCard";
import { Input } from "~/components/ui/input";
import { peopleQueryOptions } from "~/services/people/people";
import { useDebounce } from "~/hooks/useDebounce";
import { Person } from "~/services/people/peopleSchema";

export default function Index() {
  const { data: people, isPending, error } = useQuery(peopleQueryOptions);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  let filteredPeople = people || [];

  if (debouncedSearchQuery) {
    filteredPeople = filteredPeople.filter((person: Person) =>
      person.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }

  const renderPersonCard = ({ item }: { item: Person }) => (
    <PersonCard person={item} />
  );

  const renderHeader = () => (
    <View className="px-4">
      <Button 
        text="Join the rebellion" 
        onClick={() => Linking.openURL('https://swapi.info/')} 
        className="mb-4" 
      />
    </View>
  );

  const renderEmpty = () => (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-muted-foreground text-center">
        {debouncedSearchQuery 
          ? `No people found matching "${debouncedSearchQuery}"` 
          : "No people available"
        }
      </Text>
    </View>
  );

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
    <View className="flex-1">
      <View className="px-4 pt-4">
        <Input
          placeholder="Search people..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="mb-4"
        />
      </View>
      <FlatList
        data={filteredPeople}
        renderItem={renderPersonCard}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
