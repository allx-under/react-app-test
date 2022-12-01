import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import LoaderSpinner from "./LoaderSpinner/LoaderSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getAllItems, removeItem } from "API/API";

import CreateItemBtn from "./CreateItemBtn/CreateItemBtn";
import Modal from "./Modal/Modal";
import TableList from "./TableList/TableList";
import Header from "./Header/Header";
import StartInfo from "./StartInfo/StartInfo";
import Stats from "./Stats/Stats";

const portalContainer = document.querySelector("#portal");

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onClickCloseModal = (e) => {
    if (e.currentTarget === e.target) {
      setIsOpenModal(false);
    } else if (e.currentTarget.nodeName === "BUTTON") {
      setIsOpenModal(false);
    }
  };

  const onClickRemoveItem = async (id) => {
    try {
      setIsRefreshing(true);
      const result = await removeItem(id);
      toast.success("Removed", { autoClose: 1000 });
      return result;
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onClickRunApi = () => {
    setIsFirstOpen(false);
  };

  const onSubmitToRefresh = () => {
    setIsLoading(true);
    setIsRefreshing(true);
    setIsOpenModal(false);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const { data } = await getAllItems();
        setItems(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();

    if (isRefreshing) {
      setIsRefreshing(false);
    }
  }, [isRefreshing]);

  if (isFirstOpen) {
    return <StartInfo onClick={onClickRunApi} />;
  }

  return isLoading ? (
    <LoaderSpinner />
  ) : (
    <>
      <ToastContainer />
      <Overlay>
        <StyledList>
          {items.length ? (
            <>
              <Header />
              <TableList
                onClickRemove={onClickRemoveItem}
                items={items}
              ></TableList>{" "}
            </>
          ) : (
            <StyledTitle>
              To create first purchase click on the button "Create new card"
            </StyledTitle>
          )}
          <CreateItemBtn onClick={openModal} />
        </StyledList>
        <Stats
          amount={items
            .map((item) => item.quantity * item.price)
            .reduce((partialSum, a) => partialSum + a, 0)}
        />
      </Overlay>
      {isOpenModal &&
        createPortal(
          <Modal
            isOpen={isOpenModal}
            onSubmitToRefresh={onSubmitToRefresh}
            onClickCloseModal={onClickCloseModal}
          />,
          portalContainer
        )}
    </>
  );
};

export default App;

const StyledTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-align: center;
`;
const StyledList = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Overlay = styled.div`
  background: url(https://img.freepik.com/premium-photo/empty-wood-table-top-with-blur-clothing-boutique-display-interior-shopping-mall-background_293060-20462.jpg?w=2000);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;
