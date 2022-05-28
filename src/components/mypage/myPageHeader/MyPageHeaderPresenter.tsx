import React, { useEffect, useState } from "react";
import * as S from "./MyPageHeaderStyles";
import Script from "next/script";
import Modal from "../../common/commonModal";
import Payment from "../../common/commonModal/payment";
const MyPageHeaderPresenter = (props: any) => {
  const { onClickMyPageList, fetchUserData, weahterData } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [weatherDetail, setWeatherDetail] = useState("");
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const getDate = () => {
    const newDate = new Date();
    const tmp = newDate.getMonth() + 1;
    const mm = tmp.toString().padStart(2, "0");
    const dd = newDate.getDate().toString().padStart(2, "0");
    return `${mm} ${dd}`;
  };

  return (
    <S.MyPageHeaderWrapperDiv>
      <S.MyPageHeaderWeatherDivFake></S.MyPageHeaderWeatherDivFake>
      <S.MyPageHeaderContentDiv>
        <S.MyPageHeaderProFileImg src="/images/user.png" alt="profileImg"></S.MyPageHeaderProFileImg>
        <S.MyPageHeaderUserNameP>{fetchUserData?.fetchUser.nickname}</S.MyPageHeaderUserNameP>
        <S.MyPageHeaderButtonCountP>{`단추 ${fetchUserData?.fetchUser.button}개`}</S.MyPageHeaderButtonCountP>
        <S.MyPageHeaderDataTagFlexDiv>
          <S.MypageHeaderDataTagDiv>{`#${fetchUserData?.fetchUser.region.id}`}</S.MypageHeaderDataTagDiv>
          <S.MypageHeaderDataTagDiv style={{ marginRight: "0px" }}>{`#${fetchUserData?.fetchUser.style}`}</S.MypageHeaderDataTagDiv>
        </S.MyPageHeaderDataTagFlexDiv>
      </S.MyPageHeaderContentDiv>
      <S.MyPageHeaderWeatherDiv>
        <S.MyPageWeatherFirstDiv>
          {weahterData?.getWeather.weatherIcon === "01d" || weahterData?.getWeather.weatherIcon === "01n" ? (
            <S.MyPageHeaderSunnyImg src="../images/🦆 _Weather Sunny_.png" alt="weatherSunny" />
          ) : (
            <S.MyPageHeaderSunnyImg src={`http://openweathermap.org/img/wn/${weahterData?.getWeather.weatherIcon}@2x.png`} alt="weatherSunny" />
          )}
          <S.MyPageHeaderFrontDateSpan>{getDate()}</S.MyPageHeaderFrontDateSpan>
        </S.MyPageWeatherFirstDiv>
        <S.MyPageWeatherTempertureDiv>
          <S.MyPageWeatherDoubleDiv>
            <S.ThermometerImg src="../images/🦆 _Temperature_.png" />
            <S.MyPageWeatherTemp>{`${Math.round(weahterData?.getWeather.temp)}°C`}</S.MyPageWeatherTemp>
          </S.MyPageWeatherDoubleDiv>
          <S.MyPageWeatherDoubleDiv>
            <S.RainImg src="../images/🦆 _umbrella with rain drops_.png" />
            <S.MyPageWeatherTemp>{`${weahterData?.getWeather.rainAmount}%`}</S.MyPageWeatherTemp>
          </S.MyPageWeatherDoubleDiv>
        </S.MyPageWeatherTempertureDiv>
      </S.MyPageHeaderWeatherDiv>
    </S.MyPageHeaderWrapperDiv>
  );
};

export default MyPageHeaderPresenter;
