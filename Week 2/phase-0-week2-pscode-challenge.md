# PSEUDOCODE CHALLENGE - PHASE-0 WEEK 2

# Table of Contents

1. <a href="#newton second law">Newton Second Law</a>
2. <a href="#leap year">Leap Year</a>
3. <a href="#laundry">Laundry Day</a>
4. <a href="#manicure">Manicure</a>

# Newton Second Law.

1. GET m EQUAL TO 600 and a EQUAL TO 2
2. CALCULATE m * a
3. OUTPUT 1200N

# Leap Year

1. GET year
2. PROCESS
<pre style="font-weight: bold">
   IF year modulo/% 4 IS zero AND year modulo/% 100 IS zero AND year modulo/% 400 IS zero THEN
        OUTPUT leap_year IS TRUE
   ELSE
        OUTPUT common_year IS TRUE
   END IF
</pre>

# Laundry

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

## Manicure

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
