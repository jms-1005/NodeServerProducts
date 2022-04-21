
import express, { application } from 'express';
import cors from 'cors';

import { First } from "./first.module";

const server = express();
server.use(cors());
//req is what the browser (client) sends to the server
//res is what the server would send to the browser (client)
server.get("/", (req, res) => {
    res.send("Hello from the Node server");
});

server.get("/contact", (req, res) =>{
    res.send("This is the contact page");
})

server.get("/about-us", (req, res) => {
    res.send("This is about us page");
})

server.get("/products", (req, res) => {
    // connection to the db 

    res.json([
        { 
            name: "iPhone 14",
            price: 1999,
            image: "https://www.bell.ca/Styles/wireless/iPhone_13s_green/img_iPhone13_Green_5G_lrg1.png"
        },
        { 
            name: "Samsung",
            price: 999,
            image: "https://media.wired.com/photos/5e8d08bdd036ef00088bfbf2/master/w_1600%2Cc_limit/Gear-Samsung-Galaxy-A01-back-SOURCE-Samsung.jpg"
        },
        {
            name: "LG",
            price: 599,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRERIPEREREBERERIREA8QEREREBESGBQaGRgUGBgcITElHB4rHxgYJjgoKy8xQzU1HCQ7QDs0QC40NTEBDAwMEA8QHBISHDQrISQxMTExMTQxMTQxNDExNjQ1PTE0ND80NDE0NDQxNDQxNDQxNDQ0NDE0NDQ0NDQ0NDQ0NP/AABEIAQoAvQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcCAwQGBQj/xABJEAACAQMCAgYFCAMOBwEAAAABAgADBBESIQUxBgcTQVFhIjJxsbIUNXN0gZGhwTRCciMkJTNEUlNjZIKSk6LRQ2KEtMLS8RX/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKREBAAICAQMDBAIDAQAAAAAAAAECAxEEEjEyISJRBUFhcRORM4GhFf/aAAwDAQACEQMRAD8AtaIiYMyIkQESIkUiJEBIiRCpkRIgTIiRIpIiIUiJEBESJGRMYiAiIgdkiImTSSIiFJERASIkQpE8d0u4xcW/EOEW9KoUpXNdluECodah6YAyRkbMeWOc+j02483D7GpcoA1QMqUw2dAdjgM3iAMnHfjEaNvvzF3CgsxCqoLMzHAUAZJJ7hPAUbDji06dw/Fbdaz6H+SV6NJaWliCVLgZ2B7h9vfPrdY1d04PdurDUadJCyeqVesiNjyKsw+2NG3n+Idaydq1Kxs6l2q5zU1MmoDbKoFJ0+Zx7J9foj1gUOIP8mdGtrnBK02YMj4zqCNgHUAM4IH24Mnqqs6dPhVCoiqHrmo9VwBqdhVdACfABQMe3xnmese2Shxfht1SUJVq1KZqFPR1lKqAMccyQ2D4gS+nZPXW1rxPMcc6S3Np2ztw2o9vRyTci5oKjIP1gp9LyxPucLu+3oUrjQ1LtaaVOzb101DOD98xZxLqiREjImMRAREiAiJEK7ZERMmkkRIgTIiRCkRIkVXvWQKqXvCbqnbV7lbapVqOlBHc4DUiBkA4JwefhOfj1/ccbta1lT4fd2tRVW4RrhSiVGRgDSDEAaiGJHslk5kZl2nSpzpPd1eI2yUavBr5eI01SlTrhK3Yr6a6yBsMMAeYOM8++WXX4Qtzw75DWGjXa06T8mKOqrhh3EqwB+yfYzEbWKqe4Ve8Y4Hqs2smu6AZmpMiVHQEnco6DYHnpYZz4b5x4JdrxbilJuIl7a7t6oelblSlJ0UaloqrbowcBsnOoEjuEuOfNvOB2laoK9W2pPWXTiqyDWNPqkNz27o6k0+H0mt6l9d23DtFT5IhF1fVCjCnUCH0KAbGGy2CR4YPdPWRMZjtlEEREMiIkQESIkUiIgdkiJEzaSREQpIiRIqZESIUiIgJERIEiJjDIiIgIkRASIiRSIkQEREK65ERM2kkRIkUkREKREiBMiJEgRExhkREQEiIgJERIpESICIiFIiIHVIiRMmokREKREiAiJEjImMRAREQEiJEBERIpEiICIiFIiICIiB0SIiZNZESICJE8Z0t6wbfh9Q2602uK6gF1VgqJkZAZt/SxviIjZMxHd7OYyoqnW/VOyWiA92pmb3ETkqdbF8fVoW4HjoqZH3uZemU66roiUVV60eInYGmh/5aaf8AkDOGp1i8Ub+VEeynSU/6VEvRJ1w/QUSouinWLcF6aXR7SmXVKjHGpAx2cHy3yDnYS3JjMaZVtFiJz395ToUqleq2lKal3bGTgdwHeTyxK/ues85PZ2g0/qmo/pH2heX3mSKzPYm0R3WRIlT1us27/Vo26+1XJ+KfPr9ZPED6ppJ+zTU++ZdEp/JVdESh6vT7ibfykj9lEX3CRb9Lb4uHa5rNg7r2lQAj2A4l6JT+WPhfMTzHQvj73aVaVbHbW7Llht2lN86HI8fRb8PGenmExqdNkTuNkREikREDcTGZExla2RMjMgmRmFiGWZQl9wkXN1dV6lRgzXVcgLjYCqyjc58JfGZTy0zrrEA73Fxn/PedXFrW1p6vhy8280rGp16vir0ZoA7mq395fyE+rw/ovYsMurtjuNQj3Ym2o+g8jg/hMKdXfUDj2T2KcWlq9oeVe+S9fS0x+WjiHR+zUE06JGNs66h95mmy4TbAhnoLUXHq6mXJxtvO26ui4CLsO895MIcCehTj4q01NY/p38Ctpj3zM6+ZfA4vbJTqVzRQU0en2gpgkhPXwAT4DH3T9BiUFxk71Pq/5vL8Uz5nnViuWYrHpt30j3S8t1lEjhtQeNWkD5jXn3gSm2lx9Zfzc/01L4pTrTnp2a8nk1acn7z9gGTNTOr086ArBhgqWwyEHZge8EDBGOZznAm3WVIZTgggg+YmN7SZCoYIodBUUJjTpYkA7cuR2mbBxzrt5yTrt4FpdW6n5Xd8sfJ7XHjyPOWJiV/1b/pV19Wtve0sIzVbu308WEQYmDNIEyCyFmwSpMsZiTMpiYESJJkSKgSsVwNYC+tWuCT3fx9SWcJXNshIqEgnFa4x4Y7d508byeT9Xt046z+XDXoasjIHoO2+d9KliBgc8AzipWDjRuuahVcH0dLEIQPPZ15eDdwyftvsclDjS6/4kK/nIWpug7MkqVcHdssoQAgY2GE8+Znv4rzWNPP42Tca0+UbAaQ4b0XV2p5TBYICW1b+jjG3PM52GJ9RquFFPQQEV1p5bJAcEOTsNWe7ljznznGJ1Uvae76Xj44rTb4fF/8AifV/zqS/FlD8QGXYHvpJkHljU8vde6fN/UP80/sr5W/08t1lfNz/AE1L4pTzS4Osr5ub6Wl8Up9pzU7NWXyatOSB4zG6ogLqG2+D5+ftklsHI7phc1i22ABzwM8/tmbW5TOu3nJOu3gWx1cj983J/s1v72lgGV/1dfpFx4fJrf3tLBM127t9PFgZGJliMTBmLNgmIEzlhjLCQZMxkRBkSZEjKETwFi2oOvcta4zj6d57+V7bApRrP/OuLhR4jNdxOvhxu8vH+tRvFWPy5riockZ28uZmtLd2GFZx4ekZutqWvOT7J9KypspwcZPJhgY/GdvJ5tcXtju4eFE9cRD4lS3emwV/DIOdsTkcZO0+r0oDI1Ihsg6gc+OxnzKSFv8A5O3i5v5KxZ9jjr7IfA41sXxsfk+fYcvL3WUV0gTDP9W/N5egnjc+d5pc2tXtH6eX6yfm5vpaXxSnmlwdZPzc30tL4pT7TRTs0ZfJpeaKk6k061150al16fW0Z9LHnjMjiIpah2R20rqA1aA2kZ06vSxnVz8pm1uGddvOSddvAtjq6P75uB/Zbc/6mlgyverv9KuPqtt8Tywprt3b6eJERMGSRMpAkypLVBMEzHMhpMgwTIzIyiATwnBsOtemf6e4xn6d8Ge6zK9sbkU+0qfzK1zqHiPlFT8Zsx54xRMz93l/VqTfHWI77Rb/ALm5zsc4x5+E+3agHJI5d08jxXinaOzoCinZckZPnjlmd3Drp3pntGLFcEYwpI8dp5vLvbLbbq4HAmaxaY9W/pKgYUxnJViQPLGD+U4aK4EwuXbOCC2PVJPpEZyATNVFm1Ev38h4Dwn0HBvNMcQ+krg1WIfE6UPl3+q/m8u4GUl0o9d/qv51JdgM5uXO7zLyr11mvH6eW6yD/Bz/AEtL4pULS3esc/we30tL4pUTTXj8XJm8ml5oqTe80VJm1tU67eck67eBa3V3+k3H1W3+J5YMr3q8/Sbj6rb/ABNLBBmq3k308UzKY5kiYsmQmUxEmUaZBMZkGYqSCZBgmGUQZlW3dTKNSQbtcXBY5/r3lo5nhrfh1N0L+rUNa4IP/UPznFy8kUrEz8sq4K5LR1fb1cnDeDAgO2/gSM49gm2tSWm4wfW2JPeZ9qwVtJVhjG0+RxQprKltxtjznBx8tr5JiZepx6amauaoAZynds9w2EyqjI2JnNSPMT6Xj31XT0IrqHwukVTU7+Vtgfe8u8GUd0hGGb6sfe8vATXntudvnskTGe8T8w8v1jfN7fS0vilSNLb6xfm9vpaXxSo2jH4uPN5NLzRUm95oqTNqap1285DOu3gWn1en983H1a397SwAZX/V9+kXH1e3/Oe+Bmm/d0449sNgMkTAGSDMWcw2AzLM1gzIGXbHTVE2mkZBomTUkWhoMgzcaJmPYmNSzi0Nc8nYDNPH9Zcf9xUnsOwM8LY1iFdT+rWuAMc/4955v1Gszjj9unj+63p8Pqo5UNjnjkZ5C7Ys7EndmLZP7RnoDc8xnnt9+08/xBTqGMHnuBsTmcPEia2mXqceOm0y5r6rUCDSdh6xx6WJha1yef39xE6+wym/fnB8fH7JzUKY+7unv4Mka9HVr3enZ8fpL67edt+by7RKQ6R7O31Y+95eotzNuaerUw+ezzEcjJv5h5LrF+b2+lpfFKjaW/1kUivDmP8AW0vilQtLj8XFmmJt6NDzRUnfa2dSvUFKijVHbOEXGdvM7CctxbVELBkdTTJFTKMNBDlPSPd6SsvtBEzaXKZ1285J128C0ur/APSLn6Ch7p70GeE6u6eq5uR4ULf3SwBbmabxPU6sUx0w1gzIGZigZkKBmOpZTaGAMnMzFAzLsTLqUm0Po4EjAmGYzNrjZ4HhGkeAmGYzC7ZhR4CVPTc+mO75RdYx3/vh5auZ+dull7ecOv7q3VytN69WvTVlBRqdViwZdQ5bkbd4M5uTx5zViI+07dPFzxivMz2mHrXO/l3z5tdyD7N8GeQTphdDn2T/ALSY92Jk/S2q5BenTO2Dp1DP4mcdeFkrP2evj+o4I77/AKeuo3OvCnwIHlMbY4Yqec8jS6S4bUaX3Pj8p0jpOhYMUcHyKnPum+uLJX7N/wD6OCdan/jq6T+u31Y+95+jAB4CfmK+4kLp3ZVIApCmqnGosQ3h5mfpkGdtd6jbwOVki+a1qz6TLyPWtj/8x/p6PxGUg0vjrC4fUueG1kpKXdDTqhFBLOEYFgAOZ05wO/EoZpnDmZ2V69Cp2lM4bSynzU8x+Amu54lUdXVtJ7TdyQSfXd9t9vSd/wDEZqeaKkK1Trt5yTrt4Fu9Vv6VefVrb85Zu3hKu6rH1XV4RkhaNshPdq9IYz/dMsvMkjdkeEZE1ZjMDdkRkTTmTmAiTEiIkSYgRPhdIuA29+AlxTDhM6G/WU9+D3T70x0iBWVz1U2bepUrU/LKMPxE+XcdUK/qXf8AmUv/AFYS4dAkFBCqNr9Ud0PUr0H9utD7jOF+q3iA5Ci3mtYfmol/dmJBpCUVZ0K6tzSq06t5v2biotNGVld1IK6zn1QRnAG55nG0tea1TE2yI1XJYIdPrch/vPDcV6G0rh2qVDVDtuXR2Ume9M4+IXApKraGcu601VBk5IJz7NjKKyuOrlD6lxWXydabj8RPnV+riqPVuEb9ugB8JEsocbplwgp1D6CuxIVdIZwmwYjVuw9XOe7PKdS3aZph6VSn2iox1rvTLvoRGC5wSxA3Pf7YVTlTq9uwcj5M48NddPzMzs+g10HGtEC5GcPrGPYSJbI4nQIDBGKsMo+BhvSAGBz5ZblyVvCS15bnKhipGzHs3JXcgnGNvafEGNkJ6LcHo2luEpA5c66juVLu+MZOAAMcsAbT7WJwcKrq6tpOQD62lkB3I3Vt1O3L2HvmfEC4GaSUnqBTpWt6mNdPUfMgaiBkZIAyOcDsAk4nl+FpxNBTS6WzrA9n21RFRXVND9oRpIy+rRjC4x5z6dgimrh+1K6fRDoFTn3kAb+3/aa7ZNWiNd2dabrM77PqSZrtf4un+wnwibZsYEZmOYzIjKJjmMwMomOYzCpiRmMwJkRmICIiEJBUHGQDg5Ge4+MnMQrUbamSrGmmpfUbQuV9hxtM3pqwIZVYEYIZQQR4HPMTKJRrFCmOVNBjlhF22I9zEfaZj8lp/wBGnravUX1v53Ln5zdEgxRAuygDfOAAN/GfI6RdHKHEFpJXNRRRqCqhpsgOsDAzqUgjyxPsxKPHDq6stt6m3L9zscjfPPsfHeYVurSwdGQtXCtpyE+S0z6Pq7rSB2ntIgYUUCIqDOEVUGeeAMDP3TOIgIiJAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH//2Q=="
        },
        {
            name: "not known",
            price: 0,
            image: " "
        }
    ]);
})

//Create a server and run from the port number specified
server.listen(4400, function(){
    console.log("Node Express server is now running on port 4400");
})

let objGreeting = new First();
console.log(objGreeting.greetings());