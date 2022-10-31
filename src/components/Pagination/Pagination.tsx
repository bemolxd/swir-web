import { HStack } from "@chakra-ui/react";
import { range } from "lodash";
import { MdArrowBack, MdArrowForward, MdFirstPage } from "react-icons/md";

import { Meta } from "types";

import { useQueryParams } from "components/QueryParamsV2";
import { useCheckMobile } from "components/Layout";

import { PaginationButton } from "./PaginationButton";
import { PaginationInput } from "./PaginationInput";

interface IProps {
  meta: Meta | undefined;
  isLoading?: boolean;
  margin?: number;
}

export const Pagination = ({ meta, isLoading = false, margin = 3 }: IProps) => {
  const { pages: pagesHelper } = useQueryParams();
  const isMobile = useCheckMobile();

  if (!meta) return null;

  const { total, current, change } = pagesHelper({ ...meta });

  if (isMobile) return null;

  const isFirstPage = current === 1;
  const isLastPage = current === total;

  const pages = range(1, total + 1);
  const lastPage = pages[pages.length - 1];
  const index = pages.findIndex((page) => current === page);
  const pagesLeft =
    pages.length > 7
      ? pages.slice(index, margin + index).filter((page) => page !== lastPage)
      : pages;

  if (total <= 1) return null;

  return (
    <HStack w="100%" justify="flex-end" mt={4}>
      <PaginationButton onClick={() => change(1)} isDisabled={isFirstPage}>
        <MdFirstPage />
      </PaginationButton>
      <PaginationButton
        onClick={() => change(current - 1)}
        isDisabled={isFirstPage}
      >
        <MdArrowBack />
      </PaginationButton>
      <>
        {pagesLeft.map((page) => (
          <PaginationButton
            key={page}
            isDisabled={page === current}
            onClick={() => change(page)}
            isLoading={isLoading}
          >
            <span>{page}</span>
          </PaginationButton>
        ))}
        {pages.length > 7 ? (
          <>
            <PaginationInput
              onChange={(newPage) => {
                if (newPage > pages.length) {
                  return;
                }
                change(newPage);
              }}
            />
            <PaginationButton
              key={lastPage}
              isDisabled={lastPage === current}
              onClick={() => change(lastPage)}
              isLoading={isLoading}
            >
              <span>{lastPage}</span>
            </PaginationButton>
          </>
        ) : null}
      </>
      <PaginationButton
        onClick={() => change(current + 1)}
        isDisabled={isLastPage}
      >
        <MdArrowForward />
      </PaginationButton>
    </HStack>
  );
};
