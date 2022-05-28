import get from "lodash/get";
import React from "react";
import { FieldProps } from "react-admin";
import ReactJson, { ReactJsonViewProps } from "react-json-view";

type Props = {
  source: string;
  record?: any;
  jsonString?: boolean;
  reactJsonOptions?: Omit<ReactJsonViewProps, "src">;
} & FieldProps;

export const JsonField: React.FC<Props> = ({
  source,
  record = {},
  jsonString = false,
  reactJsonOptions = {},
}) => {
  console.error(record)
  console.error(source)
  let src = get(record, source);
  console.error(src)

  if (jsonString) {
    src = JSON.parse(src);
  }

  return <ReactJson {...reactJsonOptions} src={src || {}} />;
};
