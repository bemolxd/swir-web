import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";

import { IOption } from "types";

import { withSuspense } from "components/RemoteData";
import { Select } from "components/Select";

import { useAdminsQuery } from "modules/users/infrastructure";

export const TechSelect = withSuspense(
  () => {
    const admins = useAdminsQuery();
    const { formatMessage } = useIntl();
    const {
      register,
      setValue,
      formState: { errors },
    } = useFormContext();

    const options: IOption[] | undefined = admins?.collection.map((admin) => ({
      label: `${admin.firstName} ${admin.lastName}`,
      value: admin.userId,
    }));

    return (
      <Select
        {...register("techId", {
          required: true,
        })}
        options={options!}
        placeholder={formatMessage({
          id: "UserOrderSummary.techSelect.placeholder",
          defaultMessage: "Wybierz opiekuna",
        })}
        onChange={(e) => setValue("techId", e.target.value)}
        isInvalid={errors.techId}
      />
    );
  },
  //TODO: lepszy fallback
  { fallback: <></> }
);
