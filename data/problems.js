const problems = [

  //Sample Problems

  //Set 1 Easy
  {
    name: `Even Digits Easy`,
    statement: `
        <p>
        Supervin has a unique calculator. This calculator only has a display, a plus
        button, and a minus button. Currently, the integer <b>N</b> is displayed on
        the calculator display.
      </p><p>
        Pressing the plus button increases the current number displayed on the
        calculator display by 1. Similarly, pressing the minus button decreases the
        current number displayed on the calculator display by 1. The calculator does
        not display any leading zeros. For example, if <code>100</code> is displayed
        on the calculator display, pressing the minus button once will cause the
        calculator to display <code>99</code>.
      </p><p>
        Supervin does not like odd digits, because he thinks they are "odd".
        Therefore, he wants to display an integer with only even digits in its decimal
        representation, using only the calculator buttons. Since the calculator is a
        bit old and the buttons are hard to press, he wants to use a minimal number of
        button presses.
      </p><p>
        Please help Supervin to determine the minimum number of button presses to make
        the calculator display an integer with no odd digits.
      </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
        4
        42
        11
        1
        2018
          </pre>`,
    exampleOutput: `<pre class="io-content">
        Case #1: 0
        Case #2: 3
        Case #3: 1
        Case #4: 2
          </pre>`,

    exampleExplaination: `<p>
        In Sample Case #1, the integer initially displayed on the calculator has no
        odd digits, so no button presses are needed.
      </p><p>
        In Sample Case #2, pressing the minus button three times will cause the
        calculator to display <code>8</code>. There is no way to satisfy the
        requirements with fewer than three button presses.
      </p><p>
        In Sample Case #3, either pressing the minus button once (causing the
        calculator to display <code>0</code>) or pressing the plus button once will
        cause the calculator to display an integer without an odd digit.
      </p><p>
        In Sample Case #4, pressing the plus button twice will cause the calculator
        to display <code>2020</code>. There is no way to satisfy the requirements with
        fewer than two button presses.
      </p>`
  },
  {
    name: `Even Digits Easy`,
    statement: `
        <p>
        Supervin has a unique calculator. This calculator only has a display, a plus
        button, and a minus button. Currently, the integer <b>N</b> is displayed on
        the calculator display.
      </p><p>
        Pressing the plus button increases the current number displayed on the
        calculator display by 1. Similarly, pressing the minus button decreases the
        current number displayed on the calculator display by 1. The calculator does
        not display any leading zeros. For example, if <code>100</code> is displayed
        on the calculator display, pressing the minus button once will cause the
        calculator to display <code>99</code>.
      </p><p>
        Supervin does not like odd digits, because he thinks they are "odd".
        Therefore, he wants to display an integer with only even digits in its decimal
        representation, using only the calculator buttons. Since the calculator is a
        bit old and the buttons are hard to press, he wants to use a minimal number of
        button presses.
      </p><p>
        Please help Supervin to determine the minimum number of button presses to make
        the calculator display an integer with no odd digits.
      </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
        4
        42
        11
        1
        2018
          </pre>`,
    exampleOutput: `<pre class="io-content">
        Case #1: 0
        Case #2: 3
        Case #3: 1
        Case #4: 2
          </pre>`,

    exampleExplaination: `<p>
        In Sample Case #1, the integer initially displayed on the calculator has no
        odd digits, so no button presses are needed.
      </p><p>
        In Sample Case #2, pressing the minus button three times will cause the
        calculator to display <code>8</code>. There is no way to satisfy the
        requirements with fewer than three button presses.
      </p><p>
        In Sample Case #3, either pressing the minus button once (causing the
        calculator to display <code>0</code>) or pressing the plus button once will
        cause the calculator to display an integer without an odd digit.
      </p><p>
        In Sample Case #4, pressing the plus button twice will cause the calculator
        to display <code>2020</code>. There is no way to satisfy the requirements with
        fewer than two button presses.
      </p>`
  },
  {
    name: `Even Digits Easy`,
    statement: `
        <p>
        Supervin has a unique calculator. This calculator only has a display, a plus
        button, and a minus button. Currently, the integer <b>N</b> is displayed on
        the calculator display.
      </p><p>
        Pressing the plus button increases the current number displayed on the
        calculator display by 1. Similarly, pressing the minus button decreases the
        current number displayed on the calculator display by 1. The calculator does
        not display any leading zeros. For example, if <code>100</code> is displayed
        on the calculator display, pressing the minus button once will cause the
        calculator to display <code>99</code>.
      </p><p>
        Supervin does not like odd digits, because he thinks they are "odd".
        Therefore, he wants to display an integer with only even digits in its decimal
        representation, using only the calculator buttons. Since the calculator is a
        bit old and the buttons are hard to press, he wants to use a minimal number of
        button presses.
      </p><p>
        Please help Supervin to determine the minimum number of button presses to make
        the calculator display an integer with no odd digits.
      </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
        4
        42
        11
        1
        2018
          </pre>`,
    exampleOutput: `<pre class="io-content">
        Case #1: 0
        Case #2: 3
        Case #3: 1
        Case #4: 2
          </pre>`,

    exampleExplaination: `<p>
        In Sample Case #1, the integer initially displayed on the calculator has no
        odd digits, so no button presses are needed.
      </p><p>
        In Sample Case #2, pressing the minus button three times will cause the
        calculator to display <code>8</code>. There is no way to satisfy the
        requirements with fewer than three button presses.
      </p><p>
        In Sample Case #3, either pressing the minus button once (causing the
        calculator to display <code>0</code>) or pressing the plus button once will
        cause the calculator to display an integer without an odd digit.
      </p><p>
        In Sample Case #4, pressing the plus button twice will cause the calculator
        to display <code>2020</code>. There is no way to satisfy the requirements with
        fewer than two button presses.
      </p>`
  },


  //Set 2 Medium
  {
    name: `Even Digits Medium`,
    statement: `
        <p>
        Supervin has a unique calculator. This calculator only has a display, a plus
        button, and a minus button. Currently, the integer <b>N</b> is displayed on
        the calculator display.
      </p><p>
        Pressing the plus button increases the current number displayed on the
        calculator display by 1. Similarly, pressing the minus button decreases the
        current number displayed on the calculator display by 1. The calculator does
        not display any leading zeros. For example, if <code>100</code> is displayed
        on the calculator display, pressing the minus button once will cause the
        calculator to display <code>99</code>.
      </p><p>
        Supervin does not like odd digits, because he thinks they are "odd".
        Therefore, he wants to display an integer with only even digits in its decimal
        representation, using only the calculator buttons. Since the calculator is a
        bit old and the buttons are hard to press, he wants to use a minimal number of
        button presses.
      </p><p>
        Please help Supervin to determine the minimum number of button presses to make
        the calculator display an integer with no odd digits.
      </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
        4
        42
        11
        1
        2018
          </pre>`,
    exampleOutput: `<pre class="io-content">
        Case #1: 0
        Case #2: 3
        Case #3: 1
        Case #4: 2
          </pre>`,

    exampleExplaination: `<p>
        In Sample Case #1, the integer initially displayed on the calculator has no
        odd digits, so no button presses are needed.
      </p><p>
        In Sample Case #2, pressing the minus button three times will cause the
        calculator to display <code>8</code>. There is no way to satisfy the
        requirements with fewer than three button presses.
      </p><p>
        In Sample Case #3, either pressing the minus button once (causing the
        calculator to display <code>0</code>) or pressing the plus button once will
        cause the calculator to display an integer without an odd digit.
      </p><p>
        In Sample Case #4, pressing the plus button twice will cause the calculator
        to display <code>2020</code>. There is no way to satisfy the requirements with
        fewer than two button presses.
      </p>`
  },
  {
    name: `Even Digits Medium`,
    statement: `
        <p>
        Supervin has a unique calculator. This calculator only has a display, a plus
        button, and a minus button. Currently, the integer <b>N</b> is displayed on
        the calculator display.
      </p><p>
        Pressing the plus button increases the current number displayed on the
        calculator display by 1. Similarly, pressing the minus button decreases the
        current number displayed on the calculator display by 1. The calculator does
        not display any leading zeros. For example, if <code>100</code> is displayed
        on the calculator display, pressing the minus button once will cause the
        calculator to display <code>99</code>.
      </p><p>
        Supervin does not like odd digits, because he thinks they are "odd".
        Therefore, he wants to display an integer with only even digits in its decimal
        representation, using only the calculator buttons. Since the calculator is a
        bit old and the buttons are hard to press, he wants to use a minimal number of
        button presses.
      </p><p>
        Please help Supervin to determine the minimum number of button presses to make
        the calculator display an integer with no odd digits.
      </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
        4
        42
        11
        1
        2018
          </pre>`,
    exampleOutput: `<pre class="io-content">
        Case #1: 0
        Case #2: 3
        Case #3: 1
        Case #4: 2
          </pre>`,

    exampleExplaination: `<p>
        In Sample Case #1, the integer initially displayed on the calculator has no
        odd digits, so no button presses are needed.
      </p><p>
        In Sample Case #2, pressing the minus button three times will cause the
        calculator to display <code>8</code>. There is no way to satisfy the
        requirements with fewer than three button presses.
      </p><p>
        In Sample Case #3, either pressing the minus button once (causing the
        calculator to display <code>0</code>) or pressing the plus button once will
        cause the calculator to display an integer without an odd digit.
      </p><p>
        In Sample Case #4, pressing the plus button twice will cause the calculator
        to display <code>2020</code>. There is no way to satisfy the requirements with
        fewer than two button presses.
      </p>`
  },
  {
    name: `Even Digits Medium`,
    statement: `
        <p>
        Supervin has a unique calculator. This calculator only has a display, a plus
        button, and a minus button. Currently, the integer <b>N</b> is displayed on
        the calculator display.
      </p><p>
        Pressing the plus button increases the current number displayed on the
        calculator display by 1. Similarly, pressing the minus button decreases the
        current number displayed on the calculator display by 1. The calculator does
        not display any leading zeros. For example, if <code>100</code> is displayed
        on the calculator display, pressing the minus button once will cause the
        calculator to display <code>99</code>.
      </p><p>
        Supervin does not like odd digits, because he thinks they are "odd".
        Therefore, he wants to display an integer with only even digits in its decimal
        representation, using only the calculator buttons. Since the calculator is a
        bit old and the buttons are hard to press, he wants to use a minimal number of
        button presses.
      </p><p>
        Please help Supervin to determine the minimum number of button presses to make
        the calculator display an integer with no odd digits.
      </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
        4
        42
        11
        1
        2018
          </pre>`,
    exampleOutput: `<pre class="io-content">
        Case #1: 0
        Case #2: 3
        Case #3: 1
        Case #4: 2
          </pre>`,

    exampleExplaination: `<p>
        In Sample Case #1, the integer initially displayed on the calculator has no
        odd digits, so no button presses are needed.
      </p><p>
        In Sample Case #2, pressing the minus button three times will cause the
        calculator to display <code>8</code>. There is no way to satisfy the
        requirements with fewer than three button presses.
      </p><p>
        In Sample Case #3, either pressing the minus button once (causing the
        calculator to display <code>0</code>) or pressing the plus button once will
        cause the calculator to display an integer without an odd digit.
      </p><p>
        In Sample Case #4, pressing the plus button twice will cause the calculator
        to display <code>2020</code>. There is no way to satisfy the requirements with
        fewer than two button presses.
      </p>`
  },


  //Set 3 Hard
  {
    name: `Even Digits Hard`,
    statement: `
        <p>
        Supervin has a unique calculator. This calculator only has a display, a plus
        button, and a minus button. Currently, the integer <b>N</b> is displayed on
        the calculator display.
      </p><p>
        Pressing the plus button increases the current number displayed on the
        calculator display by 1. Similarly, pressing the minus button decreases the
        current number displayed on the calculator display by 1. The calculator does
        not display any leading zeros. For example, if <code>100</code> is displayed
        on the calculator display, pressing the minus button once will cause the
        calculator to display <code>99</code>.
      </p><p>
        Supervin does not like odd digits, because he thinks they are "odd".
        Therefore, he wants to display an integer with only even digits in its decimal
        representation, using only the calculator buttons. Since the calculator is a
        bit old and the buttons are hard to press, he wants to use a minimal number of
        button presses.
      </p><p>
        Please help Supervin to determine the minimum number of button presses to make
        the calculator display an integer with no odd digits.
      </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
        4
        42
        11
        1
        2018
          </pre>`,
    exampleOutput: `<pre class="io-content">
        Case #1: 0
        Case #2: 3
        Case #3: 1
        Case #4: 2
          </pre>`,

    exampleExplaination: `<p>
        In Sample Case #1, the integer initially displayed on the calculator has no
        odd digits, so no button presses are needed.
      </p><p>
        In Sample Case #2, pressing the minus button three times will cause the
        calculator to display <code>8</code>. There is no way to satisfy the
        requirements with fewer than three button presses.
      </p><p>
        In Sample Case #3, either pressing the minus button once (causing the
        calculator to display <code>0</code>) or pressing the plus button once will
        cause the calculator to display an integer without an odd digit.
      </p><p>
        In Sample Case #4, pressing the plus button twice will cause the calculator
        to display <code>2020</code>. There is no way to satisfy the requirements with
        fewer than two button presses.
      </p>`
  },
  {
    name: `Even Digits Hard`,
    statement: `
        <p>
        Supervin has a unique calculator. This calculator only has a display, a plus
        button, and a minus button. Currently, the integer <b>N</b> is displayed on
        the calculator display.
      </p><p>
        Pressing the plus button increases the current number displayed on the
        calculator display by 1. Similarly, pressing the minus button decreases the
        current number displayed on the calculator display by 1. The calculator does
        not display any leading zeros. For example, if <code>100</code> is displayed
        on the calculator display, pressing the minus button once will cause the
        calculator to display <code>99</code>.
      </p><p>
        Supervin does not like odd digits, because he thinks they are "odd".
        Therefore, he wants to display an integer with only even digits in its decimal
        representation, using only the calculator buttons. Since the calculator is a
        bit old and the buttons are hard to press, he wants to use a minimal number of
        button presses.
      </p><p>
        Please help Supervin to determine the minimum number of button presses to make
        the calculator display an integer with no odd digits.
      </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
        4
        42
        11
        1
        2018
          </pre>`,
    exampleOutput: `<pre class="io-content">
        Case #1: 0
        Case #2: 3
        Case #3: 1
        Case #4: 2
          </pre>`,

    exampleExplaination: `<p>
        In Sample Case #1, the integer initially displayed on the calculator has no
        odd digits, so no button presses are needed.
      </p><p>
        In Sample Case #2, pressing the minus button three times will cause the
        calculator to display <code>8</code>. There is no way to satisfy the
        requirements with fewer than three button presses.
      </p><p>
        In Sample Case #3, either pressing the minus button once (causing the
        calculator to display <code>0</code>) or pressing the plus button once will
        cause the calculator to display an integer without an odd digit.
      </p><p>
        In Sample Case #4, pressing the plus button twice will cause the calculator
        to display <code>2020</code>. There is no way to satisfy the requirements with
        fewer than two button presses.
      </p>`
  },
  {
    name: `Even Digits Hard`,
    statement: `
        <p>
        Supervin has a unique calculator. This calculator only has a display, a plus
        button, and a minus button. Currently, the integer <b>N</b> is displayed on
        the calculator display.
      </p><p>
        Pressing the plus button increases the current number displayed on the
        calculator display by 1. Similarly, pressing the minus button decreases the
        current number displayed on the calculator display by 1. The calculator does
        not display any leading zeros. For example, if <code>100</code> is displayed
        on the calculator display, pressing the minus button once will cause the
        calculator to display <code>99</code>.
      </p><p>
        Supervin does not like odd digits, because he thinks they are "odd".
        Therefore, he wants to display an integer with only even digits in its decimal
        representation, using only the calculator buttons. Since the calculator is a
        bit old and the buttons are hard to press, he wants to use a minimal number of
        button presses.
      </p><p>
        Please help Supervin to determine the minimum number of button presses to make
        the calculator display an integer with no odd digits.
      </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
        4
        42
        11
        1
        2018
          </pre>`,
    exampleOutput: `<pre class="io-content">
        Case #1: 0
        Case #2: 3
        Case #3: 1
        Case #4: 2
          </pre>`,

    exampleExplaination: `<p>
        In Sample Case #1, the integer initially displayed on the calculator has no
        odd digits, so no button presses are needed.
      </p><p>
        In Sample Case #2, pressing the minus button three times will cause the
        calculator to display <code>8</code>. There is no way to satisfy the
        requirements with fewer than three button presses.
      </p><p>
        In Sample Case #3, either pressing the minus button once (causing the
        calculator to display <code>0</code>) or pressing the plus button once will
        cause the calculator to display an integer without an odd digit.
      </p><p>
        In Sample Case #4, pressing the plus button twice will cause the calculator
        to display <code>2020</code>. There is no way to satisfy the requirements with
        fewer than two button presses.
      </p>`
  }
]

module.exports = problems;