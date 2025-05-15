import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import simpleExample from "./simpleExample";
import museumAgent from "./museumAgent";

export const allAgentSets: AllAgentConfigsType = {
  frontDeskAuthentication,
  customerServiceRetail,
  simpleExample,
  museumAgent,
};

export const defaultAgentSetKey = "museumAgent";
