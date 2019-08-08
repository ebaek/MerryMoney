export const updateBalance = (current_user, deposit) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${current_user.id}`,
        data: {
            user: {
                balance: current_user.balance + deposit
            }
        },
    });
};
