import { Pressable, View } from "react-native";
import { useRouter } from "expo-router";
import { extractIdFromUrl } from "~/utils/personUtils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { Person } from "~/services/people/peopleSchema";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/person/${extractIdFromUrl(person.url)}`)}
      className="mb-4"
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{person.name}</CardTitle>
          <View className="w-12 h-1 bg-blue-500 rounded-full" />
        </CardHeader>
        <CardContent>
          <Text className="mb-2">Height: {person.height}cm</Text>
          <Text className="mb-2">Mass: {person.mass}kg</Text>
          <Text className="mb-2">Birth Year: {person.birth_year}</Text>
          <Text>Gender: {person.gender}</Text>
        </CardContent>
      </Card>
    </Pressable>
  );
}
