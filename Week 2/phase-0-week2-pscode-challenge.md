# PSEUDOCODE CHALLENGE - PHASE-0 WEEK 2

>_ student_id : suryooneplus_

# Table of Contents

1. <a href="#newton">Newton Second Law</a>
2. <a href="#leap">Leap Year</a>
3. <a href="#laundry">Laundry Day</a>
4. <a href="#manicure">Manicure</a>

# NEWTON


## Algorithm

1. Set variable M to 600 and A to 2
2. start compute M times A
3. Print the result

## Pseudocode

1. GET m EQUAL TO 600 and a EQUAL TO 2
2. CALCULATE m * a
3. OUTPUT 1200N

# LEAP

## Algorithm

1. Get user input or system date
2. Start processing the data
3. If year modulo 4 is zero and modulo 100 is zero and modulo 400 is zero then print leap year is true
4. Or if year modulo 4 is zero and year is not divisible by 100 then print leap year is true
5. Else it's a common year

## Pseudocode

1. GET year
2. PROCESS
<pre>
    IF year modulo/% 4 IS zero AND year modulo/% 100 IS zero AND year modulo/% 400 IS zero THEN
        OUTPUT leap_year IS TRUE
    ELSE IF year module/% 4 IS zero OR year NOT DIVISIBLE by 100 THEN
        OUTPUT leap_year IS TRUE
    ELSE
        OUTPUT common_year IS TRUE
   END IF
</pre>

# LAUNDRY

## Algorithm

1. Set gombal as variable equal to 20 // Gombal is dirty laundry in Java
2. Set the machine to turned off before putting some laundry
3. Set pickup (hand picked) capacity // usually we can pick a dirty laundry up to 10 or maybe 20 at once
4. start putting 10 peaces of laundry into the machine and repeat
5. If we reached out of 20 pieces, then start the machine

## Psedocode

1. SET gombal IS 20
2. SET machine_switch_on IS 0
3. SET handling_capacity IS 10
4. PROCESS
<pre>
    FOR 1 TO (gombal DIVIDED BY handling_capacity)
        PUT handling_capacity OF gombal INTO machine
    END FOR
    machine_switch_on EQUAL TO 1
</pre>

# MANICURE

## Algorithm

1. We already know that the class has 40 students
2. Because today is Manicure day, so the teacher start to check all the students finger nail
3. Miss Robinson (The teachers name if you wondering), start the process by check them one by one
4. If Miss Robinson find a student with long finger nail, then she give he/she a punishment.
5. If not, they will get a Nice Job! pad at their shoulder.

## Pseudocode

1. SET student IS EQUAL TO 40
2. PROCESS
<pre>
    FOR 1 TO student
        IF fingel_nail EQUAL TO long THEN
            punished EQUAL TO TRUE
        ELSE
            compliment EQUAL TO TRUE
        END IF
   END FOR 
</pre>
