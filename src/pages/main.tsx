import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Modal from '../components/modal';

const stickyNote = css`
  height: 200px;
  width: 200px;
  background-color: #bae4ed;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  /* @media (max-width: 600px) {
    margin: 30px 5vw;
  } */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const modalOpenButton = css`
  position: absolute;
  right: 30px;
  bottom: 30px;
  height: 60px;
  width: 60px;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-color: #bae4ed;
  border-radius: 50%;
  box-shadow:0 4px 0 0 #7abecc;
`;
//margin: 7px AuthenticatorAssertionResponse;
//text-align: center;
const displayText = css`
  word-wrap: break-word
`


const Main: NextPage = () => {
  const [isOpenmodal, setIsOpenModal] = useState<boolean>(false);
  const swichOfModal = () => {
    isOpenmodal ? setIsOpenModal(false) : setIsOpenModal(true);
  };
  return (
    <div>
      <div css={stickyNote}>
        <p css={displayText}>付箋</p>
        <button css={modalOpenButton} onClick={() => swichOfModal()} />
      </div>
      {isOpenmodal === true && <Modal swichOfModal={swichOfModal} />}
    </div>
  );
};

export default Main;
