 class GameControl {
            controllerType= " "
            setControllerType(type){
                this.controlType=type
            }
            getInputType(){
               throw new Error("error messege")
            }
        }
         class VRController extends GameControl{
            getInputType(){
                return "motion"
            }
            
        }
        class JoystickController extends GameControl{
            getInputType(){
                return "button"
            }
            
        }
        class MotionSensorController extends GameControl{
            getInputType(){
                return "gesture"
            }
            
        }
        console.log("testing classes")

        const vrController=new VRController()
        vrController.setControllerType("VR Controller")

        const joystick= new JoystickController()
         joystick.setControllerType("Joy Stick")

         const motionSensor= new MotionSensorController()
         motionSensor.setControllerType("Motion Sensor")


         console.log("VR Controller:",vrController.getInputType())
         console.log("Joystick Controller:",joystick.getInputType())
         console.log("Motion Controller:",motionSensor.getInputType())
        
   