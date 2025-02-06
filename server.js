import "dotenv/config";
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + d ** power, 0);
  return sum === num;
};

const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
};

const getDigitSum = (num) => num.toString().split("").reduce((acc, d) => acc + Number(d), 0);

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (number === undefined) {
    return res.status(400).json({ number: null, error: true });
  }

  const num = Number(number);

  if (isNaN(num)) {
    return res.status(400).json({ number: "alphabet", error: true });
  }

  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  try {
    const { data: fun_fact } = await axios.get(`http://numbersapi.com/${num}/math?json`);

    res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: getDigitSum(num),
      fun_fact: fun_fact.text,
    });
  } catch (error) {
    res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: getDigitSum(num),
      fun_fact: "Could not fetch a fun fact.",
    });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
