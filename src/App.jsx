import React, { useState } from "react";

const App = () => {
  const [showResult, setShowResult] = useState(false);
  const date = new Date();
  const [birthdate, setBirthdate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [age, setAge] = useState({
    day: "--",
    month: "--",
    year: "--",
  });
  const [error, setError] = useState(false);

  const inputBirth = (e) => {
    setShowResult(false);
    setAge({
      day: "--",
      month: "--",
      year: "--",
    });

    let value = e.target.value;
    let inputName = e.target.name;

    setBirthdate((prev) => ({ ...prev, [inputName]: value }));
  };

  const calculateAge = (e) => {
    e.preventDefault();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (
      birthdate.day === "" ||
      birthdate.day > 31 ||
      birthdate.month > 12 ||
      birthdate.year > year ||
      birthdate.month === "" ||
      birthdate.year === ""
    ) {
      setError(true);
    } else {
      setError(false);

      setAge({
        day: String(Math.abs(day - birthdate.day)),
        month: String(Math.abs(birthdate.month - month)),
        year: String(Math.abs(year - birthdate.year)),
      });
      setShowResult(true);
      console.log(age.month.length);
    }
  };

  return (
    <main className="font-poppins w-full h-screen p-[14px] bg-OffWhite flex items-center justify-center">
      <article className="w-full max-w-[300px] sm:max-w-[600px] bg-white px-6 sm:px-8 sm:py-10 py-8  rounded-[20px] rounded-br-[90px] shadow-LightGray shadow-lg">
        <form
          action=""
          onSubmit={(e) => calculateAge(e)}
          className="border-b-2 relative mb-[40px]"
        >
          <section className="w-full sm:max-w-[400px] max-w-[300px] flex items-start justify-between gap-2 sm:gap-4 mb-[45px]">
            <div className="flex flex-col items-start gap-1 ">
              <label
                htmlFor="day"
                className="font-bold text-[10px] sm:text-[12px] text-SmokeyGray tracking-widest"
              >
                DAY
              </label>
              <input
                onInput={(e) => inputBirth(e)}
                className={` ${
                  birthdate.day > 31 || (birthdate.day === "" && error)
                    ? "border-LightRed hover:border-LightRed"
                    : "border-OffWhite hover:border-OffBlack"
                } border-2 bg-transparent rounded-md p-2 pl-3  w-full font-bold leading-6 text-base duration-300  sm:text-[20px] md:text-[24px] placeholder:text-LightGray   outline-none text-OffBlack`}
                placeholder="DD"
                type="number"
                id="day"
                name="day"
                value={birthdate.day}
              />
              <p className="text-[8px] sm:text-[12px] text-LightRed">
                {(birthdate.day > 31 && "must be a valid day") ||
                  (birthdate.day === "" && error && "cannot be empty")}
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 ">
              <label
                htmlFor="day"
                className="font-bold text-[10px] sm:text-[12px] text-SmokeyGray tracking-widest"
              >
                MONTH
              </label>
              <input
                className={` ${
                  birthdate.month > 12 || (birthdate.month === "" && error)
                    ? "border-LightRed hover:border-LightRed"
                    : "border-OffWhite hover:border-OffBlack"
                } border-2 bg-transparent rounded-md p-2 pl-3  w-full font-bold leading-6 text-base duration-300  sm:text-[20px] md:text-[24px] placeholder:text-LightGray   outline-none text-OffBlack`}
                placeholder="MM"
                type="number"
                id="day"
                name="month"
                value={birthdate.month}
                onInput={(e) => inputBirth(e)}
              />
              <p className="text-[8px] h-[14px] sm:text-[12px] text-LightRed">
                {(birthdate.month > 12 && "must be a valid day") ||
                  (birthdate.month === "" && error && "cannot be empty")}
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 ">
              <label
                htmlFor="day"
                className="font-bold text-[10px] sm:text-[12px] text-SmokeyGray tracking-widest"
              >
                YEAR
              </label>
              <input
                className={` ${
                  birthdate.year > date.getFullYear() ||
                  (birthdate.year === "" && error)
                    ? "border-LightRed hover:border-LightRed"
                    : "border-OffWhite hover:border-OffBlack"
                } border-2 bg-transparent rounded-md p-2 pl-3  w-full font-bold leading-6 text-base duration-300  sm:text-[20px] md:text-[24px] placeholder:text-LightGray   outline-none text-OffBlack`}
                placeholder="YYYY"
                type="number"
                id="day"
                name="year"
                value={birthdate.year}
                onInput={(e) => inputBirth(e)}
              />
              <p className="text-[8px] sm:text-[12px] text-LightRed">
                {(birthdate.year > date.getFullYear() &&
                  "must be a valid in the past") ||
                  (birthdate.year === "" && error && "cannot be empty")}
              </p>
            </div>
          </section>
          <button
            type="submit"
            className="bg-Purple duration-300 hover:bg-OffBlack w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] flex items-center justify-center rounded-full absolute bottom-[-50%] sm:bottom-[-64%] sm:left-[100%] left-[50%] translate-x-[-50%]   sm:translate-x-[-100%] translate-y-[-80%]"
          >
            <img
              className="w-[30px]"
              src="images/icon-arrow.svg"
              alt="arrow-icon"
            />
          </button>
        </form>
        <section className="w-full text-[36px] sm:text-[50px] font-[800] italic ">
          <div className="flex w-fit items-start sm:h-[50px]">
            <div
              className={` relative duration-500  overflow-hidden h-[55px] sm:h-[70px] w-full`}
            >
              <div
                className={`flex flex-col items-center duration-300  ${
                  showResult ? "translate-y-[0%]" : "translate-y-[-50%]"
                }`}
              >
                <p className="text-Purple text-[45px] sm:text-[60px] pr-1">
                  {age.year.length === 1 ? `0${age.year}` : `${age.year}`}
                </p>
                <p className="text-Purple text-[45px] sm:text-[60px]">--</p>
              </div>
            </div>
            <p>years</p>
          </div>
          <div className="flex w-fit items-start  sm:h-[50px] my-[-10px] sm:my-2">
            <div
              className={`  relative  overflow-hidden h-[55px] sm:h-[70px] w-full pr-1`}
            >
              <div
                className={`flex flex-col items-start  duration-300  ${
                  showResult ? "translate-y-[0%]" : "translate-y-[-50%]"
                }`}
              >
                <p className="text-Purple text-[45px] sm:text-[60px] ">
                  {age.month.length === 1 ? `0${age.month}` : `${age.month}`}
                </p>
                <p className="text-Purple text-[45px] sm:text-[60px]">--</p>
              </div>
            </div>
            <p>months</p>
          </div>
          <div className="flex w-fit  items-start  h-[50px] sm:h-[70px]">
            <div
              className={`  relative overflow-hidden h-[55px] sm:h-[70px] w-full`}
            >
              <div
                className={`flex flex-col items-start duration-300  ${
                  showResult ? "translate-y-[0%]" : "translate-y-[-50%]"
                }`}
              >
                <p className="text-Purple text-[45px] sm:text-[60px] pr-1">
                  {age.day.length === 1 ? `0${age.day}` : `${age.day}`}
                </p>
                <p className="text-Purple text-[45px] sm:text-[60px]">--</p>
              </div>
            </div>
            <p>days</p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default App;
