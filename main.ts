function Box1 () {
    Go_Start()
    Line_Follow()
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Turn_Left()
    Line_Reverse()
    Line_Follow()
    Servo_kick()
}
function Line_Follow () {
    Loop = true
    Read()
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Speed)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(480)
            MyRobotBit.RotateNOTIME(Turn.Right, Slow_speed)
            basic.pause(110)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(480)
            MyRobotBit.RotateNOTIME(Turn.Left, Slow_speed)
            basic.pause(110)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.Rotate(Turn.Left, Slow_speed, Read_ms)
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.Rotate(Turn.Right, Slow_speed, Read_ms)
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(Line_follow_ms)
            Motor_Stop()
        }
    }
    Motor_Stop()
}
function Go_Start () {
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Speed)
    basic.pause(600)
}
function Points_2 () {
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Uturn()
    Line_Reverse()
}
function Turn_Right () {
    MyRobotBit.Rotate(Turn.Right, Slow_speed, Turn_ms)
    Motor_Stop()
}
function Servo_kick () {
    MyServo.ServoRun(Servo.Servo11, 42)
    basic.pause(800)
    MyServo.ServoRun(Servo.Servo11, 112)
    basic.pause(300)
    MyServo.ServoStop(Servo.Servo11)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        OLED.init(128, 64)
        OLED.clear()
        OLED.writeString("P0=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P0))
        OLED.newLine()
        OLED.writeString("P1=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P1))
        OLED.newLine()
        OLED.writeString("P2=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P2))
        OLED.newLine()
        OLED.writeString("P3=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P3))
        OLED.newLine()
        OLED.writeString("P4=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P4))
        OLED.newLine()
        OLED.writeString("P10=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P10))
        basic.pause(200)
    }
})
function Go_to_wins () {
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Speed)
    basic.pause(500)
    Motor_Stop()
}
function Uturn () {
    MyRobotBit.Rotate(Turn.Right, Slow_speed, Uturn_ms)
}
function Motor_Stop () {
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
    basic.pause(100)
}
function Read () {
    Read_P0 = 557
    Read_P1 = 252
    Read_P2 = 261
    Read_P3 = 568
    Read_P4 = 378
    Read_P10 = 265
}
function Go_15_CM () {
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Speed)
    basic.pause(500)
    Motor_Stop()
}
function Go_30_CM () {
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Speed)
    basic.pause(1000)
    Motor_Stop()
}
function Box4 () {
    Uturn()
    Line_Reverse()
    Line_Follow()
    Servo_kick()
}
input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
    Box1()
    Box2()
    Box3()
    Box4()
    Points_1()
    Points_2()
    Back_to_start()
    Go_to_wins()
})
function Points_1 () {
    Uturn()
    Line_Reverse()
    Go_15_CM()
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Turn_Right()
    Line_Follow()
    Turn_Left()
    Line_Reverse()
    Line_Follow()
    Uturn()
    Line_Reverse()
}
function Box3 () {
    Uturn()
    Line_Reverse()
    Line_Follow()
    Turn_Left()
    Line_Reverse()
    Line_Follow()
    Uturn()
    Line_Reverse()
    Go_30_CM()
    Turn_Left()
    Line_Reverse()
    Line_Follow()
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Servo_kick()
}
function Turn_Left () {
    MyRobotBit.Rotate(Turn.Left, Slow_speed, Turn_ms)
    Motor_Stop()
}
function Line_Reverse () {
    Loop = true
    Read()
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P4) > Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) > Read_P10) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) < Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) > Read_P10) {
            MyRobotBit.Rotate(Turn.Right, Speed_read, Read_ms)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) > Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) < Read_P10) {
            MyRobotBit.Rotate(Turn.Left, Speed_read, Read_ms)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) < Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) < Read_P10) {
            Loop = false
            Motor_Stop()
        }
    }
    Motor_Stop()
}
function Box2 () {
    Uturn()
    Line_Reverse()
    Go_15_CM()
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Go_30_CM()
    Line_Follow()
    Turn_Right()
    Line_Follow()
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Servo_kick()
}
function Back_to_start () {
    Line_Follow()
    Turn_Left()
    Line_Reverse()
    Go_30_CM()
    Turn_Left()
    Line_Follow()
    Go_30_CM()
    Line_Follow()
    Turn_Right()
    Line_Follow()
    Turn_Right()
    Line_Reverse()
    Line_Follow()
    Turn_Left()
    Line_Reverse()
    Line_Follow()
    Turn_Left()
    Line_Reverse()
    Line_Follow()
    Turn_Left()
    Line_Reverse()
    Line_Follow()
}
let Read_P10 = 0
let Read_P4 = 0
let Read_P3 = 0
let Read_P2 = 0
let Read_P1 = 0
let Read_P0 = 0
let Loop = false
let Read_ms = 0
let Line_follow_ms = 0
let Uturn_ms = 0
let Turn_ms = 0
let Speed_read = 0
let Slow_speed = 0
let Speed = 0
led.enable(false)
Speed = 50
Slow_speed = 30
Speed_read = 15
Turn_ms = 510
Uturn_ms = 940
Line_follow_ms = 340
Read_ms = 50
