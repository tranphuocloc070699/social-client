import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SignupSuccessModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return {
    content: (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Đăng ký thành công</DialogTitle>
            <DialogDescription>
              Vui lòng kiểm tra email của bạn và làm theo hướng dẫn để hoàn tất
              quá trình đăng ký.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" onClick={closeModal}>
              Đóng
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
    openModal,
    closeModal,
  };
};

export default SignupSuccessModal;
