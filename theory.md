
<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">

### **Introduction**

The Insulated Gate Bipolar Transistor (IGBT) is a semiconductor device having three terminals – Gate (G), Emitter (E), and Collector (C) and is used mainly as an electronic switch. It is characterized by fast switching and high efficiency, which makes it a necessary component in modern appliances such as lamp ballasts, electric cars and variable frequency drives VFDs. Its ability to turn on and off, rapidly, makes it applicable in amplifiers to process complex wave-patterns with pulse width modulation. IGBT combines the characteristics of MOSFETs and BJTs to attain high current and low saturation voltage capacity respectively. It integrates an isolated gate using FET Field effect transistor to obtain a control input.<br>
IGBT is also known as Insulated Gate Transistor (IGT), Metal Oxide Insulated Gate Transistor (MOSIGT), Conductively Modulated Field Effect Transistor (COMFET) or Gain Modulated FET (GEMFET).<br>

### **Basic Structure And Working Of IGBT**<br>

The IGBT is constructed by a p+ layer substrate from the collector. In the IGBT, the p+ substrate is called the injection layer since it injects holes into the N- layer (in between the P+ layer and P layer) is called drift region. The thickness of N- layer determines the voltage blocking capability of the IGBT. The P-layer is known as the body region of the IGBT and the body region serves to accommodate depletion of junction J2.

<center><img src="images\structure.png" alt="structure" height="400" width="700" style="mix-blend-mode: darken; -webkit-filter:contrast(120%);"></center>
<center><b style="font-size:18px;">Fig. 1 Structure of IGBT</b></center>

<center><img src="images\symbol.png" alt="symbol" height="200" width="200" style="mix-blend-mode: darken; -webkit-filter:contrast(220%);"></center>
<center><b style="font-size:18px;">Fig. 2 Symbol of IGBT</b></center>

When collector is made positive with respect to the emitter, the IGBT is forward biased. When voltage is not applied between gate and emitter, the junction J2 between N- region and P region is reverse biased, hence no current flows from collector to emitter.<br>

When gate is applied with positive voltage with respect to emitter by source V<sub>G</sub>, with gate-emitter voltage greater than threshold voltage (V<sub>GET</sub>) of the IGBT, then n-channel or inversion layer is induced in the upper part of p-region just below the gate. This n-channel short circuits the N--region with the N+-emitter regions.<br>

Electrons start to flow from N+ region to N- region through the n-channel. Since the IGBT is forward biased, hence the P+ collector region injects holes into the N- drift region, so that the injection carrier density in the N- drift region increases extensively and in turn, the conductivity of N- region increases significantly. Hence the IGBT gets turned ON and starts to conduct forward collector current I<sub>C</sub>.<br>

The collector current (I<sub>C</sub>) or emitter current (I<sub>E</sub>) consists of two components viz. one is Hole Current (I<sub>h</sub>) due to the injected holes and another is Electron Current (I<sub>e</sub>) due to injected electrons.<br>


### **IGBT Characteristics**

<center><img src="images\circuit.png" alt="circuit" height="250" width="450" style="mix-blend-mode: darken; -webkit-filter:contrast(150%);"></center>
<center><b style="font-size:18px;">Fig. 3 Circuit diagram of IGBT </b></center>
VI characteristics of IGBT is the graphical relationship between collector current and collector-emitter voltage (V<sub>CE</sub>) for different values of gate-emitter voltages. It is basically a plot of collector current (I<sub>C</sub>) versus collector-emitter voltage for various values of gate-emitter voltage (V<sub>GE</sub>).
<center><img src="images\VI characteristics.png" alt="V-I characteristics" height="400" width="500" style="mix-blend-mode: darken; -webkit-filter:contrast(120%);"></center>
<center><b style="font-size:18px;">Fig. 4 V-I characteristics of IGBT</b></center>
VI characteristics of IGBT is also known as Static or Output Characteristics. Let us now discuss the required circuit diagram and VI characteristics. The circuit comprises of voltage source V<sub>CC</sub> to make the IGBT (Insulated Gate Bipolar Transistor) collector-emitter forward biased, resistor R<sub>s</sub> in series with the gate circuit and resistance R<sub>GE</sub> connected in shunt with gate-emitter.<br>
The gate-emitter voltage (V<sub>GE</sub>) is varied and the collector-emitter voltage (V<sub>CE</sub>) and collector current (I<sub>C</sub>) is measured. Then a plot between I<sub>C</sub> & V<sub>CE</sub> is drawn. This plot is the required static characteristics of IGBT.
When the device is forward biased, the shape of output characteristics is similar to that of BJT. However, the controlling parameter in case of IGBT is V<sub>GE</sub> as it is a voltage-controlled device.
When the device is reversed biased, there is a voltage beyond which breakdown occurs. This reverse voltage is shown to be VRM.
There is a maximum voltage in forward conduction mode beyond which collector-emitter breakdown occurs and gate losses control of collector current.

### **Transfer Characteristics**

The transfer characteristics of IGBT is basically a plot of collector current I<sub>C</sub> versus gate-emitter voltage (V<sub>GE</sub>).<br>
<center><img src="images\transfer characteristics.png" alt="Transfer characteristics" height="250" width="250" style="mix-blend-mode: darken; -webkit-filter:contrast(120%);"></center>
<center><b style="font-size:18px;">Fig. 5 Transfer characteristics of IGBT</b></center>
It may be noted from the above curve that when gate-emitter voltage is less than a minimum voltage (V<sub>GET</sub>), no current flows through the IGBT. This means, a minimum amount of forward voltage is required to make IGBT turn ON.

### **Advantages of IGBT**

1.  IGBTs can handle high voltages and currents, making them suitable for high-power applications such as motor drives, power inverters, and industrial equipment.<br>

2. IGBTs have a low voltage drop across the device when it is conducting, resulting in reduced power dissipation and higher efficiency.<br>

3. IGBTs have faster switching speeds compared to traditional power BJTs, which enables them to operate at higher frequencies and reduces switching losses.<br>

4. IGBTs have a voltage-controlled gate, like a MOSFET, which requires less current to drive the gate compared to a BJT. This simplifies the gate drive circuitry and control requirements.<br>

5. IGBTs typically have low on-resistance, leading to lower conduction losses and higher efficiency in power applications.<br>

6. IGBTs have a rugged structure that allows them to withstand high voltage and current stresses, making them reliable and suitable for demanding applications.<br>

7. IGBTs have inherent short-circuit protection due to their positive temperature coefficient characteristics, which helps prevent catastrophic failures under fault conditions.<br>

8. IGBTs are available in a wide range of voltage and current ratings, providing flexibility in designing various power electronics applications.<br>

9. Since IGBTs require relatively low gate drive power compared to other power devices, the overall system complexity and power losses are reduced.

### **Disadvantages of IGBT**

1. IGBTs have higher switching losses compared to other power semiconductor devices, such as MOSFETs. These losses occur during the transition between the on and off states, leading to power dissipation and reduced efficiency.<br>

2. IGBTs are not well-suited for high-frequency applications due to their relatively slow switching speed. This limitation makes them less suitable for high-frequency switching power converters and other high-frequency circuits.<br>

3. IGBTs can generate a significant amount of heat during operation, especially in high-power applications. Proper cooling and thermal management are essential to prevent overheating and ensure the reliability of the device.<br>

4. IGBTs require complex drive circuits to control their gate voltage and current during switching. This complexity can increase the cost and design challenges in some applications.<br>

5. While IGBTs are available in various voltage and current ratings, their limitations may not always meet the requirements of extremely high-power applications.<br>

6. In high-voltage applications, IGBTs may experience issues with voltage spikes and surges, leading to the risk of breakdown and failure.<br>

### **Applications of IGBT**

1. IGBT are used in dc and ac motor drives.<br>

2. Used in UPS systems.<br>

3. Used in power supplies and drivers for solenoids, relays and contactors.<br>

4. Used in Medical Equipment.<br>

5. IGBT are also used in Robotics and Automation.


</div>