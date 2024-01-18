import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import moment from 'moment'


const Date = ({ date, onSelectDate, selected,mutation,setWindows}:any) => {
  
  
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  const day = moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Today' : moment(date).format('ddd')
  // get the day number
  const dayNumber = moment(date).format('D')
        mutation.isSuccess && setWindows(mutation.data)

  // get the full date
  const fullDate = moment(date).format('YYYY-MM-DD')
  return (
    <TouchableOpacity
      onPress={() => {
        onSelectDate(fullDate)
        mutation.mutate(fullDate)
       
      }}
      style={[styles.card, selected === fullDate && { backgroundColor: "#729384" }]}
    >
      <Text
        style={[styles.big, selected === fullDate && { color: "#fff" }]}
      >
        {day}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && { color: "#fff", fontWeight: 'bold', fontSize: 24 },
        ]}
      >
        {dayNumber}
      </Text>
    </TouchableOpacity>
  )
}

export default Date

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    borderRadius: 10,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 90,
    width: 80,
    marginHorizontal: 5,
  },
  big: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  medium: {
    fontSize: 16,
  },
})