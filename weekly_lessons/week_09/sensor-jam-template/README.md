# Sensor Jam Template

A p5.js sketch that receives sensor data from an Arduino over USB (Web Serial) and uses it to change a visual. Use it with the Week 9 Arduino activities.

_Rename the main folder when you duplicate this for your own projects!_

## Setup

1. **Arduino:** upload your sketch (e.g. `activity_9a`). It must send **one number per line**, e.g. `Serial.println(distVal);` and nothing else.
2. **Close the Arduino Serial Monitor.** Only one program can use the port at a time.
3. **Run this folder with a local server** (e.g. VS Code Live Server), then open it in **Chrome or Edge**. Safari and Firefox don't support Web Serial.
4. Click **Connect to Arduino**, choose your board's port, and move your hand in front of the sensor.

## Troubleshooting

| Problem | Likely cause |
| --- | --- |
| No port appears in the list | Wrong cable (charge-only), board not plugged in, or wrong browser |
| "Port busy" / can't connect | Serial Monitor (or another tab) still has the port open |
| Nothing logs in the console | Baud rate mismatch: Arduino `Serial.begin(9600)` must match `port.open(9600)` |
| Circle doesn't change | Arduino is printing extra text. Send only a number per line |
| Movement feels jumpy | Use Option 2 (`lerp`) in `sketch.js`, or lower the Arduino `delay()` |

## Your project notes

Document your project here: what it does, what sensor you used, and how the data maps to the visual.

---
