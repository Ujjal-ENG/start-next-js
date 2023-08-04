"use client";
import { Modal } from "@/components/ui/modal";

export default function SetupPage() {
  return (
    <div className="p-4">
      <Modal
        isOpen
        title="test"
        description="test-description"
        onClose={() => {}}
      >
        children
      </Modal>
    </div>
  );
}
