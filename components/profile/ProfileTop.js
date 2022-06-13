import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'
import { Feather, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'

const screenWidth = Dimensions.get('screen').width
const ProfileTop = ({ user, handleEditProfile }) => {
  const renderAchievements = ({ item }) => {
    return (
      <View style={styles.achievementWrapper}>
        <Image source={{ uri: item.badge }} style={styles.achievementBadge} />
        <Text style={[globalStyles.caption, styles.achievementTitle]}>{item.title}</Text>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.flexRow}>
        <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
        <View>
          <View style={styles.editWrapper}>
            <Text style={globalStyles.title}>{user.username}</Text>
            <TouchableOpacity onPress={handleEditProfile}>
              <FontAwesome5 name="pen" size={18} color="#B49E9B" />
            </TouchableOpacity>
          </View>
          <View style={styles.flexRow}>
            <FontAwesome5 name="instagram" size={20} color="#C13584" />
            <Text style={styles.igText}>{user.instagram}</Text>
          </View>
          <View style={styles.flexRow}>
            <Feather name="award" size={18} color="#F19406" />
            <Text style={styles.pointsText}>{user.points}</Text>
          </View>
        </View>
      </View>

      {/* Achievements Scroll List */}
      <View style={styles.achievementsContainer}>
        <Text style={globalStyles.title}>Achievements</Text>
        <FlatList
          data={user.achievements}
          keyExtractor={item => item.title}
          renderItem={renderAchievements}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.achievementsList}
        />
      </View>
    </View>
  )
}

export default ProfileTop

const styles = StyleSheet.create({
  editWrapper: {
    flexDirection: 'row',
    width: screenWidth - 30 - 85 - 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  profilePic: {
    width: 85,
    height: 85,
    borderRadius: 85 / 2,
    marginRight: 15,
  },
  igText: {
    color: '#C13584',
    marginLeft: 5,
  },
  pointsText: {
    color: '#F19406',
    marginLeft: 5,
  },
  achievementsContainer: {
    marginTop: 10,
  },
  achievementsList: {
    marginTop: 3,
    paddingBottom: 14,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  achievementWrapper: {
    alignItems: 'center',
    width: 70,
    marginLeft: 10,
  },
  achievementBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  achievementTitle: {
    textAlign: 'center',
    marginTop: 3,
  },
})
