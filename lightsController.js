class LightsController {
    constructor(lightBottom, lightRight, lightLeft, lightTop) {
        this.lightBottom = lightBottom;
        this.lightRight = lightRight;
        this.lightLeft = lightLeft;
        this.lightTop = lightTop;
    }

    runDefaultControl() {
        let counter = 0;
        setInterval(() => {
            switch (counter) {
                case 0: 
                case 1: {
                    this.lightLeft.turnOffYellow()
                    this.lightRight.turnOffYellow();
                    
                    this.lightBottom.turnOnRed();
                    this.lightTop.turnOnRed();

                    this.lightLeft.turnOnRed();
                    this.lightRight.turnOnRed();
                    break;
                } 
                case 2: {
                    this.lightTop.turnOnYellow();
                    this.lightBottom.turnOnYellow();                   
                    break;
                } 
                case 3:
                case 4: {
                    this.lightTop.turnOffRed();
                    this.lightTop.turnOffYellow();
                    this.lightTop.turnOnGreen();

                    this.lightBottom.turnOffRed();
                    this.lightBottom.turnOffYellow();
                    this.lightBottom.turnOnGreen();
                    break;
                } 
                case 5: {
                    this.lightTop.turnOffGreen();
                    this.lightTop.turnOnYellow();

                    this.lightBottom.turnOffGreen();
                    this.lightBottom.turnOnYellow();
                    break;
                } 
                case 6: 
                case 7: {
                    this.lightTop.turnOffYellow();
                    this.lightTop.turnOnRed();

                    this.lightBottom.turnOffYellow();
                    this.lightBottom.turnOnRed();
                    break;
                }   
                case 8: {
                    this.lightLeft.turnOnYellow();
                    this.lightRight.turnOnYellow();
                    break;
                }  
                case 9:
                case 10: {
                    this.lightLeft.turnOffYellow();
                    this.lightLeft.turnOffRed();
                    this.lightLeft.turnOnGreen();

                    this.lightRight.turnOffYellow();
                    this.lightRight.turnOffRed();
                    this.lightRight.turnOnGreen();
                    break;
                }               
                case 11: {
                    this.lightLeft.turnOffGreen();
                    this.lightLeft.turnOnYellow();

                    this.lightRight.turnOffGreen();
                    this.lightRight.turnOnYellow();
                    counter = 0;
                    break;
                }                
            }
            counter++;            
        }, 1000);
    }
}