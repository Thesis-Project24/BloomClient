import Nav from "./screens/Nav";
import Tracker from "./screens/Tracker";
import User from "./screens/UserProfile/User";
import BottomTabNav from "./NavigationTab/BottomTabNav";
import { QueryClient, QueryClientProvider } from "react-query";
import Appi from "./screens/ChatApp/Appi";
import DoctorProfile from "./screens/Doctor/DoctorProfile";
import Home from "./screens/Home";
import DiaryDetails from "./components/Journal/DiaryDetails";
import PageSpecialists from "./screens/Specialists/PageSpecialists";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideBar from "./screens/SideBar.tsx/SideBar";
import EditDoctorProfile from "./screens/Doctor/EditDoctorProfile";
import NavBarEdit from "./components/DoctorProfile/NavBarEditDoctor";
import DrawerScreen from "./screens/SideBar.tsx/DrawerScreen";

const queryClient = new QueryClient();
const Drawer = createDrawerNavigator();


export default function DrawerRoot({ navigation }: any) {



    return (
        <QueryClientProvider client={queryClient}>

            <Drawer.Navigator initialRouteName="Back"
                screenOptions={{
                    headerShown: false, 
                    drawerStyle: {
                        backgroundColor: '#fff',
                        width:"60%",
                        // borderTopRightRadius: 100,
                        // borderBottomRightRadius: 100,
                    },
                    drawerActiveBackgroundColor:"red",
                    overlayColor:"transparent",
                    drawerHideStatusBarOnOpen:true,
                    sceneContainerStyle:{ 
                        backgroundColor: '#fff',
                    }

                        


                }}
                drawerContent={(props) => <SideBar {...props} />}
            >
                
                <Drawer.Screen
                    name="Back"
                    options={{
                        // headerShown: false,
                        header: () => <Nav />,
                        // headerLeft: () => null,
                    }}
                    component={BottomTabNav}
                />
                {/* <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        header: () => <Nav />,
                        headerLeft: () => null,

                    }}
                /> */}
                <Drawer.Screen
                    name="Nav"
                    component={Nav}
                    options={{
                        headerShown: false,
                        headerTransparent: true,
                        // cardStyle: { backgroundColor: "transparent" },
                        header: () => <Nav />,
                        headerLeft: () => null,

                    }}
                />
                {/* <Drawer.Screen
                    name="Appi"
                    component={Appi}
                    options={{
                        // header: () => <Nav />,
                        headerLeft: () => null,
                    }}
                /> */}
                <Drawer.Screen
                    name="Tracker"
                    component={Tracker}
                    options={{
                        // header: () => <Nav />,
                        headerLeft: () => null,
                    }}
                />
                <Drawer.Screen
                    name="DiaryDetails"
                    component={DiaryDetails}
                    options={{
                        headerLeft: () => null,
                    }}
                />
                <Drawer.Screen
                    name="DoctorProfile"
                    component={DoctorProfile}
                    options={{
                        // header: () => <Nav />,
                        headerLeft: () => null,
                    }}
                />
                <Drawer.Screen
                    name="User"
                    component={User}
                    options={{
                        // header: () => <Nav />,
                        headerLeft: () => null,
                    }}
                />
                <Drawer.Screen
                    name="PageSpecialists"
                    component={PageSpecialists}
                    options={{
                        headerShown: false
                        // header: () => <Nav />,
                        // headerLeft: () => null,
                    }}
                />
                <Drawer.Screen
                    name="EditDoctorProfile"
                    component={EditDoctorProfile}
                    options={{
                        // header: () => <NavBarEdit />,
                        headerLeft: () => null,
                        // headerShown: true
                    }}
                />
            </Drawer.Navigator>

        </QueryClientProvider>
    );
}


