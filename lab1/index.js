console.log('Instruction:');
console.log('Possible types: leg, hypotenuse, adjacent angle, opposite angle, angle.');
console.log('Writing example:');
console.log('triangle(7, "leg", 18, "hypotenuse")');

function triangle(firstValue, firstSide, secondValue, secondSide) {
  var a, b, c, alpha, beta;
  
  if (a <= 0 || b <= 0 || c <= 0 || alpha <= 0 || beta <= 0) {
    return "Zero or negative input.";
  }
  if(alpha >= 90 || beta >= 90){
    return "The angle must be less than 90 degrees.";
  }
  const isValid = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
  if (!isValid.includes(firstSide) || !isValid.includes(secondSide)) {
      console.log("Invalid values.");
      return "failed";
  }
  function inradians(degrees) {
    return degrees * (Math.PI / 180);
  }

  function indegrees(radians) {
    return radians * (180 / Math.PI);
  }
  if (firstSide === "leg" && secondSide === "leg") {
      a = firstValue;
      b = secondValue;
      c = Math.sqrt(a * a + b * b);
      alpha = indegrees(Math.atan(a / b));
      beta = 90 - alpha;
  } else if (firstSide === "leg" && secondSide === "hypotenuse") {
      a = firstValue;
      c = secondValue;
      if (a >= c) {
          return "The leg cannot be equal to or greater than the hypotenuse.";
      }
      b = Math.sqrt(c * c - a * a);
      alpha = indegrees(Math.asin(a / c));
      beta = 90 - alpha;
  } else if (firstSide === "hypotenuse" && secondSide === "leg") {
      c = firstValue;
      a = secondValue;
      if (a >= c) {
          return "The leg cannot be equal to or greater than the hypotenuse.";
      }
      b = Math.sqrt(c * c - a * a);
      alpha = indegrees(Math.asin(a / c));
      beta = 90 - alpha;
  } else if (firstSide === "leg" && secondSide === "adjacent angle") {
      b = firstValue;
      beta = secondValue;
      alpha = 90 - beta;
      a = b * Math.tan(inradians(alpha));
      c = b / Math.cos(inradians(alpha));
  } else if (firstSide === "leg" && secondSide === "opposite angle") {
      a = firstValue;
      alpha = secondValue;
      beta = 90 - alpha;
      b = a / Math.tan(inradians(alpha));
      c = a / Math.sin(inradians(alpha));
  } else if (firstSide === "angle" && secondSide === "leg") {
      alpha = firstValue;
      a = secondValue;
      beta = 90 - alpha;
      b = a / Math.tan(inradians(alpha));
      c = a / Math.sin(inradians(alpha));
  } else if (firstSide === "adjacent angle" && secondSide === "leg") {
      beta = firstValue;
      b = secondValue;
      alpha = 90 - beta;
      a = b * Math.tan(inradians(alpha));
      c = b / Math.cos(inradians(alpha));
  } else if (firstSide === "opposite angle" && secondSide === "leg") {
      alpha = firstValue;
      a = secondValue;
      beta = 90 - alpha;
      b = a / Math.tan(inradians(alpha));
      c = a / Math.sin(inradians(alpha));
  } else if (firstSide === "angle" && secondSide === "hypotenuse") {
      alpha = firstValue;
      c = secondValue;
      beta = 90 - alpha;
      a = c * Math.sin(inradians(alpha));
      b = c * Math.cos(inradians(alpha));
  } else if (firstSide === "hypotenuse" && secondSide === "angle") {
      c = firstValue;
      alpha = secondValue;
      beta = 90 - alpha;
      a = c * Math.sin(inradians(alpha));
      b = c * Math.cos(inradians(alpha));
  } else {
      return "failed";
  }
  if (c === a || c === b) {
    return "Hypotenuse cannot be equal to one of the legs.";
  }
console.log("a =", a.toFixed(5));
console.log("b =", b.toFixed(5));
console.log("c =", c.toFixed(5));
console.log("alpha =", alpha.toFixed(5));
console.log("beta =", beta.toFixed(5));

  return "success";
}
