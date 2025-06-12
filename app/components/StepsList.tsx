import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function StepsList() {
  const steps = useSelector((state: RootState) => state.steps.steps);

  if (!steps || steps.length === 0) {
    return (
      <div className="text-center mt-8 text-gray-500 text-lg">
        No steps added yet
      </div>
    );
  }

  const nodes: Node[] = steps.map((step, index) => ({
    id: `${index}`,
    data: {
      label: (
        <div className="py-2 px-4 rounded flex flex-col gap-2 bg-white text-sm font-[poppins]">
          <div className="flex gap-2">
            <span className="font-bold ">Type </span>
            <span className={` ${step.type=='trigger'?"bg-green-100 border border-green-600":""}  ${step.type=='action'?"bg-red-100 border border-red-600":""}  ${step.type=='condition'?"bg-blue-100 border border-blue-600":""}  py-0.5 px-2 rounded-full`}>
              {" "}
              {step.type}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Service</span>
            <span className="bg-yellow-100 border border-yellow-600 py-0.5 px-2 rounded-full">
              {" "}
              {step.service}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Config </span>
            <div className="border border-gray-300 px-3 py-3 rounded-2xl w-[200px] h-auto overflow-hidden flex">
              {" "}
              {JSON.stringify(step.config)}
            </div>
          </div>
        </div>
      ),
    },
    position: { x: index * 500, y: 50 },
    style: {
      borderRadius: 12,
      padding: 30,
      width: "350px",
      height: "auto",
      border: "1px solid #ddd",
      backgroundColor: "#fff",
    },
  }));

  const edges: Edge[] = steps.slice(1).map((_, index) => ({
    id: `e${index}-${index + 1}`,
    source: `${index}`,
    target: `${index + 1}`,
    type: "smoothstep",
    animated: true,
  }));

  return (
    <div className="h-screen bg-white rounded shadow border">
      <ReactFlowProvider>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background gap={16} />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
