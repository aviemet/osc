# OSC

Group 1 
Camera 1 camera 2 camera 3 camera 4 
Camera loop 1 camera loop 2 
Signage loop 
Stopwatch on, start, reset, off 

Group 2 
Camera 1 camera 2 camera 3 camera 4 
Camera loop 1 camera loop 2 
Signage loop 
Stage backdrop

In Open Sound Control (OSC), messages can carry various types of data as arguments. The OSC specification defines several standard data types that can be included in OSC messages. Here are the common OSC data types:

    1. Integer (32-bit signed integer): Represented as a sequence of digits optionally preceded by a minus sign ('-'). For example, -123.

    2. Floating-point number (32-bit IEEE 754 floating point): Represented as a sequence of digits optionally containing a decimal point ('.') and/or an exponent ('e' or 'E' followed by an optional sign and one or more digits). For example, 3.14 or 6.02e23.

    3. String (UTF-8 encoded string): A sequence of Unicode characters encoded using UTF-8. Enclosed in double quotes ("). For example, "Hello, world!".

    4. Blob (binary data): Arbitrary binary data, represented as a sequence of bytes enclosed in curly braces ({}). Each byte is represented as two hexadecimal characters (0-9, a-f), optionally separated by spaces. For example, {DE AD BE EF}.

    5. Time tag (64-bit NTP timestamp): Represents an absolute or relative time, specified as the number of seconds since the epoch (January 1, 1900, 00:00 UTC). Time tags are used for scheduling events.

    6. Symbol (ASCII string): Similar to strings but used to represent symbolic names or identifiers. Symbols are prefixed with a pound sign (#) and enclosed in double quotes ("). For example, #symbol.

    7. Character (ASCII character): A single ASCII character enclosed in single quotes ('). For example, 'A'.

    8. True/False (boolean): Represented as the symbols T for true and F for false.