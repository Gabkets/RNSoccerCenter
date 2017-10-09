import React from "react";
import { Link } from "react-router-native";
import { StyleSheet, FlatList, Text, View } from "react-native";

const ListOfCompetitions = props => {
  return (
    <View>
      <Text>Available Competitions</Text>
      {props.loading
        ? <Text> LOADING </Text>
        : <FlatList data={props.competitions}
             keyExtractor={(item) => item.id }
             renderItem={listItem => {

               let competition = listItem.item;

               return (
                 <View>
                   <View>
                     <View>
                       <Text>
                         {competition.caption} - {competition.league} -
                         {competition.year}
                       </Text>
                     </View>
                     <View>
                       <Text>Teams: {competition.numberOfTeams}</Text>
                     </View>
                     <View>
                       <Text>
                         Progress in matches:
                         {competition.currentMatchday} of
                         {competition.numberOfMatchdays}
                       </Text>
                     </View>
                     <View>
                       <Text> Last updated: {competition.lastUpdated}</Text>
                     </View>
                     <View>
                       <Link to={`/competition/${competition.id}`}>
                         <Text> See positions table</Text>
                       </Link>
                     </View>
                     <View>
                       <Link to={`/fixture/${competition.id}`}>
                         <Text> See fixture</Text>
                       </Link>
                     </View>
                   </View>
                 </View>
               );
             }
           } />
         }
    </View>
  );
};

export default ListOfCompetitions;
