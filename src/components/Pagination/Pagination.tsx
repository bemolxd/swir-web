import { HStack } from "@chakra-ui/react";
import { range } from "lodash";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import { Meta } from "types";

import { useQueryParams } from "components/QueryParamsV2";
import { useCheckMobile } from "components/Layout";

import { PaginationButton } from "./PaginationButton";

interface IProps {
  meta: Meta;
  isLoading?: boolean;
  margin?: number;
}

export const Pagination = ({ meta, isLoading = false, margin = 3 }: IProps) => {
  const { pages: pagesHelper } = useQueryParams();
  const { total, current, change } = pagesHelper({ ...meta });
  const isMobile = useCheckMobile();

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
