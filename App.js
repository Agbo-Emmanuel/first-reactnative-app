import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Wrapper } from './components/container';
import Typography from './components/typography';
import CustomButton from './components/button';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <Container>
      <Wrapper sx={{backgroundColor: "white"}}>
        <View style={styles.butt}>
          <AntDesign 
            name='arrowleft'
          />
          <Typography type='text16' sx={{fontWeight: "bold"}}>Receipt</Typography>
        </View>

        <View style={styles.heading}>
          <View>
            <Typography type="text20" sx={{fontWeight: "bold", color: "blue"}}>Lisa's Weekly Suply Receipt</Typography>
            <Typography type='text16'>November 22, 2024</Typography>
          </View>
        </View>

        <View style={styles.service}>
          <View style={styles.service1}>
            <View style={styles.cost}>
              <Typography type='text16'>Shoping Service</Typography>
              <Typography type='text16' sx={{fontWeight: "bold",}}>List 1</Typography>
            </View>
            <View style={styles.cost}>
              <Typography type='text16'>Service Cost</Typography>
              <Typography type='text16' sx={{fontWeight: "bold",}}>N 1000</Typography>
            </View>
          </View>
          <View style={styles.service1}>
            <View style={styles.cost1}>
              <Typography type='text16'>Shipping Adress</Typography>
              <Typography type='text16' sx={{fontWeight: "bold", height: 30, width: 120}}>8, Makinde Lawanson streeet, Ikeja, Lagos</Typography>
            </View>
          </View>
        </View>

        <View style={styles.payment}>
          <View>
            <View style={styles.cost}>
                <Typography type='text16'>Payment Type</Typography>
                <Typography type='text16' sx={{fontWeight: "bold",}}>Weekly</Typography>
            </View>
            <View style={styles.cost}>
                <Typography type='text16'>Payment Method</Typography>
                <Typography type='text16' sx={{fontWeight: "bold",}}>Debit card (5011)</Typography>
            </View>
          </View>
        </View>

        <View style={styles.service2}>
          <View style={styles.service1}>
            <View style={styles.cost}>
              <Typography type='text16'>Plan State Date</Typography>
              <Typography type='text16' sx={{fontWeight: "bold",}}>22-1-2020</Typography>
            </View>
            <View style={styles.cost}>
              <Typography type='text16'>Plan Start Time</Typography>
              <Typography type='text16' sx={{fontWeight: "bold",}}>8:45AM</Typography>
            </View>
            <View style={styles.cost}>
              <Typography type='text16'>Plan State Day</Typography>
              <Typography type='text16' sx={{fontWeight: "bold",}}>2nd day of every month</Typography>
            </View>
            <View style={styles.cost2}>
              <Typography type='text16'>Order Status</Typography>
              <Typography type='text16' sx={{fontWeight: "bold", color: "blue",}}>Pending</Typography>
            </View>
          </View>
        </View>

        <CustomButton type="rounded" sx={{flexDirection: "row", justifyContent: "space-around", height: 40}}>
          <AntDesign name='arrowdown' style={{color: "blue"}}/>
          <Typography type="text16" sx={{color: "blue"}}>
            Download as PDF
          </Typography>
        </CustomButton>
        
      </Wrapper>
    </Container>
  );
}

const styles = StyleSheet.create({
  butt: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  heading: {
    height: 75,
    // alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    // backgroundColor: "gray"
  },
  service: {
    height: 160,
    // backgroundColor: "aqua"
  },
  service1 : {
    height : 80,
    // backgroundColor: "green"
  },
  service2 : {
    height : 200,
    paddingTop: 30
    // backgroundColor: "green"
  },
  cost: {
    height: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cost2: {
    height: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25
  },

  cost1: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  payment: {
    height: 90,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderStyle: "dotted",
    paddingTop: 20
    // alignItems: "center",
    // justifyContent: "space-between"
  }
});