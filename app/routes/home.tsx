import type { Route } from "./+types/home";
import { Counter } from "../features/counter/Counter";
import StepForm from "~/components/StepForm";
import { useDispatch } from 'react-redux';
import { addStep } from '~/features/steps/stepsSlice';
import StepsList from "~/components/StepsList";
import Comps from "~/components/Comps";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Smart Stitch" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  const dispatch=useDispatch();

  const handleStepSave = (step: any) => {
    dispatch(addStep(step))
  };

  return (
    <section className="bg-white text-black relative">
      <div className="absolute left-0 top-0 z-10 bg-transparent w-[400px]">
      <StepForm onSave={handleStepSave} /></div>
      <StepsList/>
    </section>
  );
}
