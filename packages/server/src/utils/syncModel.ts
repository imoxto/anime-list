const syncModel = async (Model: any, opts?: any) => {
	if (opts) await Model.sync(opts);
	else await Model.sync();
};

export default syncModel;
