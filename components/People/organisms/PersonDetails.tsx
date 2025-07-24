import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { ScrollView, View } from "react-native";
import CapitalizedText from "~/components/common/atoms/CapitalizedText";
import PersonDetailItem from "~/components/People/atoms/PersonDetailItem";
import PersonRelatedItemsSection from "~/components/People/molecules/PersonRelatedItemsSection";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import Chip from "~/components/ui/Chip";
import { Text } from "~/components/ui/text";
import { personQueryOptions } from "~/services/people/people";
import { Person } from "~/services/people/peopleSchema";
import { extractIdFromUrl, formatDate } from "~/utils/personUtils";

type PersonDetailsProps = {
  personId: string;
  initialData?: Person;
};

const PersonDetails = ({ personId, initialData }: PersonDetailsProps) => {
  const { data: person } = useSuspenseQuery({
    ...personQueryOptions(personId),
    initialData,
  });

  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <View className="p-4 max-w-3xl self-center w-full">
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <Text className="text-2xl font-bold text-center">
              {person.name}
            </Text>
          </CardHeader>
          <CardContent className="space-y-6">
            <View>
              <View>
                <PersonDetailItem
                  label="Height"
                  value={
                    person.height === "unknown"
                      ? "Unknown"
                      : `${person.height} cm`
                  }
                />
                <PersonDetailItem
                  label="Mass"
                  value={
                    person.mass === "unknown" ? "Unknown" : `${person.mass} kg`
                  }
                />
                <PersonDetailItem
                  label="Hair Color"
                  value={<CapitalizedText value={person.hair_color} />}
                />
                <PersonDetailItem
                  label="Skin Color"
                  value={<CapitalizedText value={person.skin_color} />}
                />
                <PersonDetailItem
                  label="Eye Color"
                  value={<CapitalizedText value={person.eye_color} />}
                />
                <PersonDetailItem
                  label="Birth Year"
                  value={person.birth_year}
                />
                <PersonDetailItem
                  label="Gender"
                  value={<CapitalizedText value={person.gender} />}
                />
                <PersonDetailItem
                  label="Created"
                  value={formatDate(person.created)}
                />
                <PersonDetailItem
                  label="Last Edited"
                  value={formatDate(person.edited)}
                />
                <PersonDetailItem
                  label="Homeworld"
                  value={
                    <Chip size="sm" variant="flat" color="primary">
                      ID: {extractIdFromUrl(person.homeworld)}
                    </Chip>
                  }
                />
              </View>
            </View>

            <PersonRelatedItemsSection
              title="Films"
              items={person.films}
              color="secondary"
              prefix="Film ID"
            />

            <PersonRelatedItemsSection
              title="Species"
              items={person.species}
              color="success"
              prefix="Species ID"
            />

            <PersonRelatedItemsSection
              title="Vehicles"
              items={person.vehicles}
              color="warning"
              prefix="Vehicle ID"
            />

            <PersonRelatedItemsSection
              title="Starships"
              items={person.starships}
              color="danger"
              prefix="Starship ID"
            />
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
};

export default PersonDetails;
