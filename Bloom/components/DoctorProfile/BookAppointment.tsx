import * as React from "react";
import moment, { Moment } from "moment";
import Date from "../../components/Confirm Appointment/Date";
import Calendar from "../../components/Confirm Appointment/Calendar";
import {
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    TextInput,
    Pressable,
} from "react-native";
// import { TextInput as RNPTextInput, TextInput } from "react-native-paper";
import {
    FontFamily,
    FontSize,
    Color,
    Padding,
    Border,
} from "../../GlobalStyles";
import { transparent } from "react-native-paper/lib/typescript/styles/colors";
import ButtonBooking from "./ButtonBooking";
import {
    bookAppointment,
    getSlotsByWindow,
    getWindowsByDate,
} from "../../api/appointements/appointments";
import { Slot, Window } from "../../type";
const BookAppointment = () => {
    const [selectedDate, setSelectedDate] = React.useState("");
    const [windows, setWindows] = React.useState<Window[]>([]);
    const [description, setDescription] = React.useState("");
    const [slot, setSlot] = React.useState<Slot>();
    const windowMutation = getWindowsByDate();
    const slotMutation = getSlotsByWindow();
    const bookingMutation = bookAppointment();
    console.log(slot);
    return (
        <View style={styles.frameParent}>
            {/* horizontal calendar */}
            <View style={styles.container}>
                <Calendar
                    onSelectDate={setSelectedDate}
                    selected={selectedDate}
                    mutation={windowMutation}
                    setWindows={setWindows}
                />
            </View>
            {/*  */}
            <View style={{ height: 100 }}></View>
            {/* windows by date */}
            {windows.length ? (
                <View
                    style={[
                        styles.chooseTimeSlotParent,
                        styles.frameChildSpaceBlock,
                    ]}
                >
                    <Text style={styles.chooseTypo}>Choose Time Window</Text>
                    <ScrollView
                        style={styles.frameGroupSpaceBlock}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.frameScrollView2Content}
                    >
                        {windows.map((window) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        slotMutation.mutate(window.id);
                                    }}
                                    style={[
                                        styles.amWrapper,
                                        styles.amFrameLayout,
                                    ]}
                                >
                                    <Text style={[styles.am, styles.amTypo]}>
                                        {window.startingTime.slice(11, 16)}{" "}
                                        {window.endingTime.slice(11, 16)}{" "}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            ) : (
                ""
            )}
            {/* slots by window */}
            {slotMutation.isSuccess && slotMutation.data ? (
                <View
                    style={[
                        styles.chooseTimeSlotParent,
                        styles.frameChildSpaceBlock,
                    ]}
                >
                    <Text style={styles.chooseTypo}>Choose Time Slot</Text>
                    <ScrollView
                        style={styles.frameGroupSpaceBlock}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.frameScrollView2Content}
                    >
                        {slotMutation.data.map((slot: any) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setSlot(slot);
                                    }}
                                    style={[
                                        styles.amWrapper,
                                        styles.amFrameLayout,
                                    ]}
                                >
                                    <Text style={[styles.am, styles.amTypo]}>
                                        {slot.startingTime.slice(11, 16)}{" "}
                                        {slot.endingTime.slice(11, 16)}{" "}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            ) : (
                ""
            )}

            <View
                style={[
                    styles.textFieldWrapper,
                    styles.textFieldWrapperSpaceBlock,
                ]}
            >
                <View style={[styles.textField, styles.textFieldPosition]}>
                    <View style={styles.textField1}>
                        <View
                            style={[
                                styles.stateLayer,
                                styles.textFieldPosition,
                            ]}
                        >
                            <View style={styles.content}>
                                <View style={styles.inputText}>
                                    <TextInput
                                        onChangeText={(text) => {
                                            setDescription(text);
                                        }}
                                        style={styles.inputText1}
                                        placeholder="Write your description here"
                                        placeholderTextColor="#aaafb6"
                                    />
                                </View>
                                <View
                                    style={[
                                        styles.labelText,
                                        styles.labelTextPosition,
                                    ]}
                                >
                                    <Text style={styles.textTypo}>
                                        Description
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.supportingText}>
                        <Text style={[styles.supportingText1, styles.textTypo]}>
                            Supporting text
                        </Text>
                    </View>
                </View>
            </View>
            {slot ? (
                <View>
                    <TouchableOpacity
                        style={[styles.patientButton, styles.patientFlexBox]}
                        onPress={() => {
                            bookingMutation.mutate({
                                patientId: 1,
                                doctorId: 1,
                                slotId: slot.id,
                                appDetails: description,
                            });
                        }}
                    >
                        <View style={[styles.stateLayer, styles.patientFlexBox]}>
                        <Text style={styles.labelText2}>Book appointement</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
            ) : (
                ""
            )}
            
            <ButtonBooking />
        </View>
    );
};

const styles = StyleSheet.create({
    frameScrollView1Content: {
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingVertical: 6,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    frameScrollView2Content: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    chooseTypo: {
        maxWidth: 345,
        textAlign: "left",
        fontFamily: FontFamily.headingsH6,
        fontWeight: "700",
        fontSize: FontSize.regular16_size,
        width: "100%",
        color: Color.neutralsDark,
    },
    frameGroupSpaceBlock: {
        marginTop: 8,
        width: "100%",
    },
    calendarLayout: {
        paddingVertical: Padding.p_xs,
        paddingHorizontal: Padding.p_5xl,
        justifyContent: "center",
        height: 94,
        width: 78,
        borderRadius: Border.br_5xs,
        alignItems: "center",
    },
    textTypo1: {
        // color: Color.colorGray_100,

        fontFamily: FontFamily.subtitleBodyCaptionCaption1,
        fontWeight: "600",
        textAlign: "left",
    },
    monTypo: {
        marginTop: 4,
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
        fontSize: FontSize.medium14_size,
        textAlign: "left",
    },
    textTypo: {
        fontSize: FontSize.regular12_size,
        marginTop: 4,
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
        textAlign: "left",
    },
    frameChildSpaceBlock: {
        marginTop: 28,
        paddingVertical: 0,
        alignSelf: "stretch",
    },
    amFrameLayout: {
        width: 160,
        marginRight: 10,
        paddingVertical: Padding.p_xs,
        paddingHorizontal: Padding.p_5xl,
        justifyContent: "center",
        borderRadius: Border.br_5xs,
        alignItems: "center",
    },
    amTypo: {
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
        fontSize: FontSize.medium14_size,
        textAlign: "left",
    },
    chooseDate: {
        overflow: "hidden",
        maxHeight: 27,
        flex: 1,
        maxWidth: 345,
        textAlign: "left",
        fontFamily: FontFamily.headingsH6,
        fontWeight: "700",
        fontSize: FontSize.regular16_size,
        width: "100%",
    },
    text: {
        fontSize: FontSize.headingsH5_size,
        color: Color.neutralsWhite,
    },
    mon: {
        color: Color.neutralsGray5,
    },
    text1: {
        color: Color.neutralsGray6,
    },
    calendarDate: {
        backgroundColor: Color.green,
    },
    text2: {
        fontSize: FontSize.headingsH4_size,
        color: Color.neutralsGray2,
    },
    mon1: {
        color: Color.neutralsGray3,
    },
    text3: {
        color: Color.neutralsGray4,
    },
    calendarDate1: {
        marginLeft: 8,
        backgroundColor: Color.neutralsGray6,
    },
    calendarDateParent: {
        height: 103,
        maxHeight: 103,
        alignSelf: "stretch",
        marginTop: 8,
    },
    chooseDateParent: {
        height: 137,
        paddingVertical: 0,
        paddingHorizontal: 10,
        alignSelf: "stretch",
    },
    am: {
        color: Color.neutralsDark,
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
        fontSize: FontSize.medium14_size,
    },
    amWrapper: {
        backgroundColor: Color.neutralsGray6,
    },
    am1: {
        color: Color.neutralsGray5,
    },
    amContainer: {
        marginLeft: 8,
        backgroundColor: Color.green,
    },
    amFrame: {
        marginLeft: 8,
        backgroundColor: Color.neutralsGray6,
    },
    chooseTimeSlotParent: {
        height: 73,
        maxHeight: 75,
        paddingHorizontal: Padding.p_lg,
        marginTop: 28,
        alignItems: "center",
    },
    frameChild: {
        paddingHorizontal: 10,
    },
    frameParent: {
        paddingHorizontal: 10,
        paddingVertical: 14,
        maxHeight: 425,
        marginTop: 38,
        alignItems: "center",
        flex: 1,
        alignSelf: "stretch",
    },

    inputText1: {
        // fontFamily: FontFamily.tajawalRegular,
        maxWidth: 285,
        // fontSize: FontSize.headingsH6_size,
        alignSelf: "stretch",
        flex: 1,
        // color: "white",
        backgroundColor: "white",
    },
    inputText: {
        height: "100%",
        color: "white",
        backgroundColor: "white",
    },

    textFieldWrapper: {
        paddingHorizontal: 25,
    },
    textFieldWrapperSpaceBlock: {
        marginTop: 28,
        paddingVertical: 0,
        alignSelf: "stretch",
    },
    textField: {
        height: 130,
    },
    textFieldPosition: {
        borderTopRightRadius: Border.br_9xs,
        borderTopLeftRadius: Border.br_9xs,
        alignSelf: "stretch",
    },
    textField1: {
        borderRadius: 6,
        borderStyle: "solid",
        borderColor: "#79747e",
        borderWidth: 1,
        alignSelf: "stretch",
        flex: 1,
        backgroundColor: Color.neutralsWhite,
    },
    stateLayer: {
        paddingLeft: Padding.p_base,
        paddingTop: Padding.p_5xs,
        paddingRight: 13,
        paddingBottom: Padding.p_5xs,
        flexDirection: "row",
        flex: 1,
    },
    content: {
        paddingVertical: 6,
        alignSelf: "stretch",
        paddingHorizontal: Padding.p_10xs,
        flex: 1,
    },

    labelText: {
        top: -22,
        left: -4,
        paddingHorizontal: Padding.p_9xs,
        zIndex: 1,
        flexDirection: "row",
        paddingVertical: 0,
        alignItems: "center",
        backgroundColor: Color.neutralsWhite,
    },
    labelTextPosition: {
        position: "absolute",
        alignItems: "center",
    },
    supportingText: {
        paddingHorizontal: Padding.p_base,
        paddingTop: Padding.p_9xs,
        display: "none",
        flexDirection: "row",
        alignSelf: "stretch",
    },
    supportingText1: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    patientFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },

    patientButton: {
        marginTop: 20,
        borderRadius: Border.br_5xs,
        backgroundColor: "#729384",
        width: 288,
        height: 48,
        maxWidth: 288,
        maxHeight: 50,
        overflow: "hidden",
        alignItems: "center",
    },
    patientButtonWrapper: {
        height: 74,
        paddingHorizontal: Padding.p_32xl,
        paddingVertical: Padding.p_smi,
        maxHeight: 75,
        marginTop: 46,
        overflow: "hidden",
        alignItems: "center",
        alignSelf: "stretch",
    },
    labelText2: {
        fontSize: FontSize.medium14_size,
        fontWeight: "700",
        fontFamily: FontFamily.headingsH6,
        color: Color.black,
        textAlign: "center",
      },
});

export default BookAppointment;
