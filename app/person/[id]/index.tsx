import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { personQueryOptions } from "~/services/people/people";
import PersonDetails from "~/components/People/organisms/PersonDetails";

const PersonDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: person, isPending, error } = useQuery({
    ...personQueryOptions(id || ""),
    enabled: !!id,
  });
  
  if (!id) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Invalid person ID</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Error loading person data</Text>
        <Text className="text-gray-600 mt-2">Please try again</Text>
      </View>
    );
  }

  if (isPending) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
        <Text className="text-gray-600 mt-2">Loading person details...</Text>
      </View>
    );
  }

  if (!person) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Person not found</Text>
      </View>
    );
  }

  return <PersonDetails personId={id} initialData={person} />;
};

export default PersonDetailsScreen;
