import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import moment from 'moment'
import Date from './Date'

const Calendar = ({ onSelectDate, selected,mutation,setWindows }:any) => {
  const [dates, setDates] = useState<moment.Moment[]>([])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentMonth, setCurrentMonth] = useState()

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const _dates = []
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days')
      _dates.push(date)
    }
    setDates(_dates)
  }

  useEffect(() => {
    getDates()
  }, [])

  return (
    <>
      <View style={styles.centered}>
        <Text style={styles.title}>Current month</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {dates.map((date, index) => (
                <Pressable onPress={()=>{console.log(date, "------------")}}>
                  <Date
                  key={index}
                  date={date}
                  onSelectDate={onSelectDate}
                  selected={selected}
                  mutation={mutation}
                  setWindows={setWindows}
                />
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default Calendar

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateSection: {
    width: '100%',
    padding: 20,
  },
  scroll: {
    height: 150,
  },
})