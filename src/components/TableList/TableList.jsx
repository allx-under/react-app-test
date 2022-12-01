import { useRef } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import PropTypes from "prop-types";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import styled from "styled-components";

const TableList = ({ items, onClickRemove }) => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  return (
    <div style={{ width: "100%", height: "calc(100vh - 67px)" }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowHeight={cache.current.rowHeight}
            deferredMeasurementCache={cache.current}
            rowCount={items.length}
            rowRenderer={({ key, index, style, parent }) => {
              const item = items[index];

              return (
                <CellMeasurer
                  key={key}
                  cache={cache.current}
                  parent={parent}
                  columnIndex={0}
                  rowIndex={index}
                >
                  <Wrapper style={style}>
                    <StyledText>{item.name}</StyledText>
                    <StyledText>{item.product}</StyledText>
                    <StyledText>{+item.quantity}</StyledText>
                    <StyledText>{+item.price}</StyledText>
                    <StyledText>{item.market}</StyledText>
                    <StyledIconBtn
                      onClick={() => onClickRemove(item.id)}
                      id={item.id}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </StyledIconBtn>
                  </Wrapper>
                </CellMeasurer>
              );
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
};

TableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      product: PropTypes.string,
      quantity: PropTypes.any,
      price: PropTypes.any,
      market: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  onClickRemove: PropTypes.func,
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const StyledText = styled.p`
  width: 20%;
  padding: 5px;
  color: white;
`;

const StyledIconBtn = styled(IconButton)`
  position: absolute !important;
  right: 40px;
`;

export default TableList;
