import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch } from "@/lib/redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
