function Box1 () {
    Go_Startobstacle()
    Line_right()
    Line_right()
    Line_right()
    Line_left()
    Line_box()
}
function Line_Follow () {
    Loop = true
    Read()
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.MotorAB(motorDIR.Forward, Motir_A, Motor_B)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(450)
            MyRobotBit.RotateNOTIME(Turn.Right, Slow_speed)
            basic.pause(70)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_speed)
            basic.pause(450)
            MyRobotBit.RotateNOTIME(Turn.Left, Slow_speed)
            basic.pause(70)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.Rotate(Turn.Left, 15, 90)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.Rotate(Turn.Right, 15, 90)
            Motor_Stop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            Motor_Stop()
        }
    }
    Motor_Stop()
}
function Follow () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motir_A, Motor_B)
    basic.pause(Follow_ms)
    Motor_Stop()
}
function Left () {
    MyRobotBit.Rotate(Turn.Left, Speed, Turn_left_ms)
    Motor_Stop()
}
function Go_Startobstacle () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motir_A, Motor_B)
    basic.pause(1200)
}
function Points_2 () {
    Line_right()
    Go_30_CM()
    Right()
    Line_Reverse()
    Line_Follow()
    Reverse()
    Right()
    Line_left()
    Line_point()
}
function Line_box () {
    Line_Follow()
    Servo_kick()
    Uturn()
    Line_Reverse()
}
function Servo_kick () {
    MyServo.ServoRun(Servo.Servo11, 56)
    basic.pause(800)
    MyServo.ServoRun(Servo.Servo11, 104)
    basic.pause(200)
    MyServo.ServoStop(Servo.Servo11)
    MyRobotBit.MotorAB(motorDIR.Reverse, Motir_A, Motor_B)
    basic.pause(120)
    Motor_Stop()
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
    MyRobotBit.MotorAB(motorDIR.Forward, Motir_A, Motor_B)
    basic.pause(550)
    Motor_Stop()
}
function Uturn () {
    MyRobotBit.Rotate(Turn.Right, Speed, Uturn_ms)
    Motor_Stop()
}
function Motor_Stop () {
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
    basic.pause(100)
}
function Line_left () {
    Line_Follow()
    Reverse()
    Left()
    Line_Reverse()
}
function Read () {
    Read_P0 = 522
    Read_P1 = 174
    Read_P2 = 182
    Read_P3 = 540
    Read_P4 = 370
    Read_P10 = 330
}
function Line_right () {
    Line_Follow()
    Reverse()
    Right()
    Line_Reverse()
}
function Go_15_CM () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motir_A, Motor_B)
    basic.pause(Go_15_ms)
    Motor_Stop()
}
function Go_30_CM () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motir_A, Motor_B)
    basic.pause(Go_30_ms)
    Motor_Stop()
}
function Reverse () {
    MyRobotBit.MotorAB(motorDIR.Reverse, Motir_A, Motor_B)
    basic.pause(Revese_ms)
    Motor_Stop()
}
function Box4 () {
    Right()
    Line_Follow()
    Go_Startobstacle()
    Line_Follow()
    Reverse()
    Right()
    Line_box()
}
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    Box1()
    Box2()
    Points_1()
    Box3()
    Points_2()
    Box4()
    Back_to_start()
    Go_to_wins()
})
function Points_1 () {
    Go_15_CM()
    Left()
    Line_Reverse()
    Line_point()
}
function Box3 () {
    Line_left()
    Line_left()
    Line_box()
}
function Right () {
    MyRobotBit.Rotate(Turn.Right, Speed, Turn_right_ms)
    Motor_Stop()
}
function Line_point () {
    Line_Follow()
    Uturn()
    Line_Reverse()
    Follow()
}
function Line_Reverse () {
    Loop = true
    Read()
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P4) > Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) > Read_P10) {
            MyRobotBit.MotorAB(motorDIR.Reverse, Motir_A, Motor_B)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) < Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) > Read_P10) {
            MyRobotBit.Rotate(Turn.Right, 10, 29)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) > Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) < Read_P10) {
            MyRobotBit.Rotate(Turn.Left, 10, 29)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) < Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) < Read_P10) {
            Loop = false
            Motor_Stop()
        }
    }
    Motor_Stop()
}
function Box2 () {
    Go_15_CM()
    Right()
    Line_Reverse()
    Line_Follow()
    Reverse()
    Left()
    Go_15_CM()
    Right()
    Line_Reverse()
    Line_Follow()
    Reverse()
    Right()
    Line_box()
}
function Back_to_start () {
    Go_15_CM()
    Left()
    Line_Reverse()
    Go_30_CM()
    Left()
    Line_right()
    Line_right()
    Line_left()
    Line_left()
    Line_left()
    Line_Follow()
}
let Read_P10 = 0
let Read_P4 = 0
let Read_P3 = 0
let Read_P2 = 0
let Read_P1 = 0
let Read_P0 = 0
let Loop = false
let Go_15_ms = 0
let Go_30_ms = 0
let Uturn_ms = 0
let Turn_right_ms = 0
let Turn_left_ms = 0
let Revese_ms = 0
let Follow_ms = 0
let Slow_speed = 0
let Speed = 0
let Motor_B = 0
let Motir_A = 0
led.enable(false)
Motir_A = 50
Motor_B = 50
Speed = 50
Slow_speed = 40
Follow_ms = 200
Revese_ms = 270
Turn_left_ms = 330
Turn_right_ms = 320
Uturn_ms = 620
Go_30_ms = 950
Go_15_ms = 650
